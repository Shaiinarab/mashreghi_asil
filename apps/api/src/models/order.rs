use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use rust_decimal::Decimal;

#[derive(Debug, Clone, Serialize, Deserialize, sqlx::FromRow)]
pub struct Order {
    pub id: Uuid,
    pub user_id: Uuid,
    pub status: String,
    pub total_amount: Decimal,
    pub currency: String,
    pub shipping_address: Option<serde_json::Value>,
    pub billing_address: Option<serde_json::Value>,
    pub stripe_payment_intent_id: Option<String>,
    pub stripe_session_id: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize, sqlx::FromRow)]
pub struct OrderItem {
    pub id: Uuid,
    pub order_id: Uuid,
    pub product_id: String,
    pub variant_id: Option<String>,
    pub quantity: i32,
    pub unit_price: Decimal,
    pub total_price: Decimal,
    pub created_at: DateTime<Utc>,
}
