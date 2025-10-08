use axum::{
    routing::{get, post},
    Router,
};

use crate::AppState;

pub fn router() -> Router<AppState> {
    Router::new()
        .route("/", get(get_orders))
        .route("/", post(create_order))
        .route("/checkout/session", post(create_checkout_session))
        .route("/webhooks/stripe", post(stripe_webhook))
}

pub async fn get_orders() -> axum::Json<serde_json::Value> {
    // TODO: Implement get orders
    axum::Json(serde_json::json!({
        "orders": []
    }))
}

pub async fn create_order() -> axum::Json<serde_json::Value> {
    // TODO: Implement create order
    axum::Json(serde_json::json!({
        "message": "Order created"
    }))
}

pub async fn create_checkout_session() -> axum::Json<serde_json::Value> {
    // TODO: Implement Stripe checkout session
    axum::Json(serde_json::json!({
        "checkout_url": "https://checkout.stripe.com/..."
    }))
}

pub async fn stripe_webhook() -> axum::Json<serde_json::Value> {
    // TODO: Implement Stripe webhook
    axum::Json(serde_json::json!({
        "message": "Webhook received"
    }))
}
