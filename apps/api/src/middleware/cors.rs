use axum::{
    extract::Request,
    http::{header, HeaderValue, Method},
    middleware::Next,
    response::Response,
};

pub async fn cors_middleware(request: Request, next: Next) -> Response {
    let mut response = next.run(request).await;
    
    response.headers_mut().insert(
        header::ACCESS_CONTROL_ALLOW_ORIGIN,
        HeaderValue::from_static("*"),
    );
    response.headers_mut().insert(
        header::ACCESS_CONTROL_ALLOW_METHODS,
        HeaderValue::from_static("GET, POST, PUT, DELETE, OPTIONS"),
    );
    response.headers_mut().insert(
        header::ACCESS_CONTROL_ALLOW_HEADERS,
        HeaderValue::from_static("Content-Type, Authorization"),
    );
    
    response
}
