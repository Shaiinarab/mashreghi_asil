use serde::{Deserialize, Serialize};
use chrono::{DateTime, Utc};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Product {
    #[serde(rename = "_id")]
    pub id: String,
    pub slug: String,
    pub name: String,
    pub brand: String,
    pub description: String,
    pub images: Vec<String>,
    pub price: f64,
    pub currency: String,
    pub notes: ScentNotes,
    pub accords: Vec<String>,
    pub variants: Vec<ProductVariant>,
    pub attributes: ProductAttributes,
    pub is_active: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ScentNotes {
    pub top: Vec<String>,
    pub heart: Vec<String>,
    pub base: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProductVariant {
    pub id: String,
    pub size: String,
    pub price: f64,
    pub stock: i32,
    pub sku: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProductAttributes {
    pub gender: String,
    pub season: Vec<String>,
    pub occasion: Vec<String>,
    pub longevity: String,
    pub sillage: String,
    pub intensity: String,
}
