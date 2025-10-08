use redis::{Client, aio::Connection};
use anyhow::Result;

#[derive(Clone)]
pub struct RedisClient {
    pub client: Client,
}

impl RedisClient {
    pub async fn new(redis_url: &str) -> Result<Self> {
        let client = Client::open(redis_url)?;
        
        Ok(RedisClient { client })
    }

    pub async fn get_connection(&self) -> Result<Connection> {
        let conn = self.client.get_async_connection().await?;
        Ok(conn)
    }
}
