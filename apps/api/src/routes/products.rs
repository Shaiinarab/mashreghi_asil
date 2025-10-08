use axum::{
    extract::{Path, Query, State},
    routing::get,
    Router,
};
use serde::{Deserialize, Serialize};

use crate::{handlers, AppState};

#[derive(Debug, Deserialize)]
pub struct ProductQuery {
    pub page: Option<u32>,
    pub limit: Option<u32>,
    pub category: Option<String>,
    pub brand: Option<String>,
}

#[derive(Debug, Serialize)]
pub struct ProductResponse {
    pub id: String,
    pub name: String,
    pub brand: String,
    pub price: f64,
    pub image_url: Option<String>,
    pub rating: f64,
    pub review_count: u32,
}

pub fn router() -> Router<AppState> {
    Router::new()
        .route("/", get(get_products))
        .route("/:slug", get(get_product_by_slug))
        .route("/:id/reviews", get(get_product_reviews))
}

pub async fn get_products(
    State(_state): State<AppState>,
    Query(query): Query<ProductQuery>,
) -> axum::Json<Vec<ProductResponse>> {
    // TODO: Implement product listing with filters
    let products = vec![
        ProductResponse {
            id: "1".to_string(),
            name: "Midnight Rose".to_string(),
            brand: "Luxury Essence".to_string(),
            price: 299.0,
            image_url: Some("/images/midnight-rose.jpg".to_string()),
            rating: 4.8,
            review_count: 124,
        },
        ProductResponse {
            id: "2".to_string(),
            name: "Ocean Breeze".to_string(),
            brand: "Aqua Fragrance".to_string(),
            price: 249.0,
            image_url: Some("/images/ocean-breeze.jpg".to_string()),
            rating: 4.6,
            review_count: 89,
        },
    ];

    axum::Json(products)
}

pub async fn get_product_by_slug(
    State(_state): State<AppState>,
    Path(slug): Path<String>,
) -> axum::Json<ProductResponse> {
    // TODO: Implement product by slug lookup
    let product = ProductResponse {
        id: "1".to_string(),
        name: "Midnight Rose".to_string(),
        brand: "Luxury Essence".to_string(),
        price: 299.0,
        image_url: Some("/images/midnight-rose.jpg".to_string()),
        rating: 4.8,
        review_count: 124,
    };

    axum::Json(product)
}

pub async fn get_product_reviews(
    State(_state): State<AppState>,
    Path(id): Path<String>,
) -> axum::Json<Vec<serde_json::Value>> {
    // TODO: Implement product reviews
    let reviews = vec![];
    axum::Json(reviews)
}
