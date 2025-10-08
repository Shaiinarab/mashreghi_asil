use serde::{Deserialize, Serialize};
use chrono::{DateTime, Utc};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Review {
    #[serde(rename = "_id")]
    pub id: String,
    pub product_id: String,
    pub user_id: String,
    pub rating: i32,
    pub title: String,
    pub body: String,
    pub is_verified_purchase: bool,
    pub is_approved: bool,
    pub helpful_count: i32,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}
