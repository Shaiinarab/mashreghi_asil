use anyhow::Result;
use serde::Deserialize;

#[derive(Debug, Clone, Deserialize)]
pub struct Config {
    pub database_url: String,
    pub mongodb_url: String,
    pub redis_url: String,
    pub jwt_secret: String,
    pub jwt_refresh_secret: String,
    pub stripe_secret_key: String,
    pub stripe_webhook_secret: String,
    pub meilisearch_url: String,
    pub meilisearch_key: String,
}

impl Config {
    pub fn from_env() -> Result<Self> {
        dotenv::dotenv().ok();
        
        Ok(Config {
            database_url: std::env::var("DATABASE_URL")
                .unwrap_or_else(|_| "postgresql://user:password@localhost/perfume_shop".to_string()),
            mongodb_url: std::env::var("MONGODB_URL")
                .unwrap_or_else(|_| "mongodb://localhost:27017/perfume_shop".to_string()),
            redis_url: std::env::var("REDIS_URL")
                .unwrap_or_else(|_| "redis://localhost:6379".to_string()),
            jwt_secret: std::env::var("JWT_SECRET")
                .unwrap_or_else(|_| "your-jwt-secret-key".to_string()),
            jwt_refresh_secret: std::env::var("JWT_REFRESH_SECRET")
                .unwrap_or_else(|_| "your-jwt-refresh-secret-key".to_string()),
            stripe_secret_key: std::env::var("STRIPE_SECRET_KEY")
                .unwrap_or_else(|_| "sk_test_...".to_string()),
            stripe_webhook_secret: std::env::var("STRIPE_WEBHOOK_SECRET")
                .unwrap_or_else(|_| "whsec_...".to_string()),
            meilisearch_url: std::env::var("MEILISEARCH_URL")
                .unwrap_or_else(|_| "http://localhost:7700".to_string()),
            meilisearch_key: std::env::var("MEILISEARCH_KEY")
                .unwrap_or_else(|_| "masterKey".to_string()),
        })
    }
}
