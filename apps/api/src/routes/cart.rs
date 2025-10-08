use axum::{
    routing::{get, post, delete},
    Router,
};

use crate::AppState;

pub fn router() -> Router<AppState> {
    Router::new()
        .route("/", get(get_cart))
        .route("/", post(add_to_cart))
        .route("/items/:item_id", delete(remove_from_cart))
        .route("/clear", post(clear_cart))
}

pub async fn get_cart() -> axum::Json<serde_json::Value> {
    // TODO: Implement get cart
    axum::Json(serde_json::json!({
        "items": [],
        "total": 0
    }))
}

pub async fn add_to_cart() -> axum::Json<serde_json::Value> {
    // TODO: Implement add to cart
    axum::Json(serde_json::json!({
        "message": "Item added to cart"
    }))
}

pub async fn remove_from_cart() -> axum::Json<serde_json::Value> {
    // TODO: Implement remove from cart
    axum::Json(serde_json::json!({
        "message": "Item removed from cart"
    }))
}

pub async fn clear_cart() -> axum::Json<serde_json::Value> {
    // TODO: Implement clear cart
    axum::Json(serde_json::json!({
        "message": "Cart cleared"
    }))
}
