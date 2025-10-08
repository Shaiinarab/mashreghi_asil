use axum::{
    routing::{get, post},
    Router,
};

use crate::AppState;

pub fn router() -> Router<AppState> {
    Router::new()
        .route("/", get(get_reviews))
        .route("/", post(create_review))
}

pub async fn get_reviews() -> axum::Json<serde_json::Value> {
    // TODO: Implement get reviews
    axum::Json(serde_json::json!({
        "reviews": []
    }))
}

pub async fn create_review() -> axum::Json<serde_json::Value> {
    // TODO: Implement create review
    axum::Json(serde_json::json!({
        "message": "Review created"
    }))
}
