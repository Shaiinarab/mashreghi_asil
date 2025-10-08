use sqlx::{PgPool, postgres::PgPoolOptions};
use anyhow::Result;

#[derive(Clone)]
pub struct PostgresPool {
    pub pool: PgPool,
}

impl PostgresPool {
    pub async fn new(database_url: &str) -> Result<Self> {
        let pool = PgPoolOptions::new()
            .max_connections(10)
            .connect(database_url)
            .await?;

        Ok(PostgresPool { pool })
    }
}

impl std::ops::Deref for PostgresPool {
    type Target = PgPool;

    fn deref(&self) -> &Self::Target {
        &self.pool
    }
}
