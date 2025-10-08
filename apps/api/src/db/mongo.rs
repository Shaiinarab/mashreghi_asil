use mongodb::{Client, Database};
use anyhow::Result;

#[derive(Clone)]
pub struct MongoClient {
    pub db: Database,
}

impl MongoClient {
    pub async fn new(mongodb_url: &str) -> Result<Self> {
        let client = Client::with_uri_str(mongodb_url).await?;
        let db = client.database("perfume_shop");

        Ok(MongoClient { db })
    }
}
