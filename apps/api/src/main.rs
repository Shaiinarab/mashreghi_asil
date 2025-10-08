use axum::{
    extract::DefaultBodyLimit,
    http::Method,
    middleware,
    routing::{get, post},
    Router,
};
use tower::ServiceBuilder;
use tower_http::{
    cors::{Any, CorsLayer},
    trace::TraceLayer,
};
use tracing_subscriber;

mod auth;
mod config;
mod db;
mod handlers;
mod middleware as custom_middleware;
mod models;
mod routes;

use config::Config;
use db::{mongo::MongoClient, postgres::PostgresPool, redis::RedisClient};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Initialize tracing
    tracing_subscriber::fmt::init();

    // Load configuration
    let config = Config::from_env()?;
    
    // Initialize databases
    let postgres = PostgresPool::new(&config.database_url).await?;
    let mongo = MongoClient::new(&config.mongodb_url).await?;
    let redis = RedisClient::new(&config.redis_url).await?;

    // Run migrations
    sqlx::migrate!("./migrations").run(&postgres).await?;

    // Build application
    let app = Router::new()
        .route("/health", get(handlers::health::health_check))
        .nest("/auth", routes::auth::router())
        .nest("/products", routes::products::router())
        .nest("/cart", routes::cart::router())
        .nest("/orders", routes::orders::router())
        .nest("/reviews", routes::reviews::router())
        .layer(
            ServiceBuilder::new()
                .layer(TraceLayer::new_for_http())
                .layer(
                    CorsLayer::new()
                        .allow_origin(Any)
                        .allow_methods([Method::GET, Method::POST, Method::PUT, Method::DELETE])
                        .allow_headers(Any),
                )
                .layer(DefaultBodyLimit::max(1024 * 1024)) // 1MB limit
        )
        .layer(middleware::from_fn(custom_middleware::cors::cors_middleware))
        .with_state(AppState {
            postgres,
            mongo,
            redis,
            config,
        });

    let listener = tokio::net::TcpListener::bind("0.0.0.0:8080").await?;
    tracing::info!("Server running on http://0.0.0.0:8080");
    
    axum::serve(listener, app).await?;

    Ok(())
}

#[derive(Clone)]
pub struct AppState {
    pub postgres: PostgresPool,
    pub mongo: MongoClient,
    pub redis: RedisClient,
    pub config: Config,
}
