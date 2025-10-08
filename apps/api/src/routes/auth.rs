use axum::{
    routing::{get, post},
    Router,
};

use crate::AppState;

pub fn router() -> Router<AppState> {
    Router::new()
        .route("/register", post(register))
        .route("/login", post(login))
        .route("/refresh", post(refresh))
        .route("/logout", post(logout))
        .route("/me", get(get_current_user))
}

pub async fn register() -> axum::Json<serde_json::Value> {
    // TODO: Implement user registration
    axum::Json(serde_json::json!({
        "message": "Registration endpoint"
    }))
}

pub async fn login() -> axum::Json<serde_json::Value> {
    // TODO: Implement user login
    axum::Json(serde_json::json!({
        "message": "Login endpoint"
    }))
}

pub async fn refresh() -> axum::Json<serde_json::Value> {
    // TODO: Implement token refresh
    axum::Json(serde_json::json!({
        "message": "Refresh endpoint"
    }))
}

pub async fn logout() -> axum::Json<serde_json::Value> {
    // TODO: Implement logout
    axum::Json(serde_json::json!({
        "message": "Logout endpoint"
    }))
}

pub async fn get_current_user() -> axum::Json<serde_json::Value> {
    // TODO: Implement get current user
    axum::Json(serde_json::json!({
        "message": "Get current user endpoint"
    }))
}
