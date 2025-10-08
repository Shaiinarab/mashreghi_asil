# Luxury Perfume Shop

A modern, high-performance e-commerce platform for luxury fragrances built with cutting-edge technologies.

## 🚀 Tech Stack

### Frontend
- **Next.js 15.6.0** - React framework with App Router and Partial Pre-rendering
- **React 19.2.0** - Latest React with improved performance and concurrent features
- **Tailwind CSS 4.1.0** - Utility-first CSS framework with latest features
- **shadcn/ui 3.4.0** - Accessible and customizable UI components
- **TypeScript 5.7.2** - Type-safe development with latest language features

### Backend
- **Rust** - High-performance systems programming language
- **Axum 0.8.6** - Modern async web framework for Rust
- **Tokio 1.48.0** - Async runtime for Rust with enhanced performance
- **SQLx 0.8** - Async SQL toolkit for PostgreSQL with compile-time verification
- **MongoDB 3.2** - NoSQL database for flexible data storage

### Database
- **PostgreSQL** - Relational database for users, orders, and transactions
- **MongoDB** - Document database for products and reviews
- **Redis** - Caching and session storage

### Additional Features
- **WebAssembly (WASM)** - Rust-compiled scent analysis module with advanced similarity algorithms
- **Stripe 0.29** - Payment processing with latest SDK features
- **Meilisearch** - Fast search engine for product discovery
- **JWT Authentication** - Secure user authentication with Argon2 password hashing
- **Turbo 2.5.0** - High-performance build system for monorepo management

## 📁 Project Structure

```
perfume-shop/
├── apps/
│   ├── web/                 # Next.js frontend application
│   └── api/                 # Rust Axum backend API
├── packages/
│   └── wasm-scent/          # WebAssembly scent analysis module
├── workers/
│   └── sync/                # Meilisearch sync worker
└── docs/                    # Documentation
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js 18+** (for frontend development)
- **Rust 1.75+** (for backend development)
- **PostgreSQL 14+** (for relational data)
- **MongoDB 6+** (for document storage)
- **Redis 7+** (for caching)
- **wasm-pack** (for WebAssembly compilation)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd perfume-shop
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd apps/web
   npm install
   
   # Install Rust dependencies
   cd ../../apps/api
   cargo build
   ```

3. **Set up environment variables**
   ```bash
   # Copy environment templates
   cp apps/api/.env.example apps/api/.env
   cp apps/web/.env.example apps/web/.env.local
   ```

4. **Configure databases**
   ```bash
   # Start PostgreSQL, MongoDB, and Redis services
   # Update connection strings in .env files
   ```

5. **Run database migrations**
   ```bash
   cd apps/api
   cargo run --bin migrate
   ```

### Development

1. **Start the backend API**
   ```bash
   cd apps/api
   cargo run
   ```

2. **Start the frontend**
   ```bash
   cd apps/web
   npm run dev
   ```

3. **Build WebAssembly module**
   ```bash
   # From project root
   npm run wasm:build
   
   # Or manually
   cd packages/wasm-scent
   wasm-pack build --target web --out-dir pkg
   ```

## 🌟 Features

### MVP Features (Iteration 1) ✅
- ✅ **Homepage** - Hero section, featured products, brand story, call-to-action
- ✅ **Product Catalog** - Filtering, search, pagination, responsive grid layout
- ✅ **Product Pages** - Detailed descriptions, reviews, recommendations, variants
- ✅ **Navigation** - Responsive design with mobile-first approach
- ✅ **SEO Optimization** - Metadata, structured data, Open Graph tags
- ✅ **WebAssembly Module** - Scent analysis and similarity algorithms
- ✅ **Database Schema** - PostgreSQL + MongoDB + Redis setup
- ✅ **API Structure** - RESTful endpoints with proper error handling

### Planned Features (Iteration 2) 🔄
- 🔄 **Authentication System** - JWT with Argon2, refresh tokens, user profiles
- 🔄 **Shopping Cart** - Add/remove items, persistent cart, checkout flow
- 🔄 **Payment Integration** - Stripe checkout, webhooks, order processing
- 🔄 **Order Management** - Order tracking, status updates, email notifications
- 🔄 **Reviews & Ratings** - User reviews, moderation, helpful votes
- 🔄 **Search Engine** - Meilisearch integration with faceted search

### Advanced Features (Iteration 3) 🚀
- 🚀 **Blog System** - MDX support, content management, SEO optimization
- 🚀 **AI Recommendations** - Machine learning-based product suggestions
- 🚀 **Advanced Analytics** - User behavior tracking, sales analytics
- 🚀 **Multi-language** - i18n support, currency conversion
- 🚀 **Mobile App** - React Native companion app

## 🔄 Latest Updates (January 2025)

### Version Upgrades
- **Next.js**: 15.5.4 → 15.6.0 (Enhanced performance and stability)
- **TypeScript**: 5.x → 5.7.2 (Latest language features and improvements)
- **Axum**: 0.8.5 → 0.8.6 (Better error handling and middleware)
- **Tokio**: 1.47.1 → 1.48.0 (Performance optimizations)
- **MongoDB Driver**: 3.0 → 3.2 (Enhanced async support)
- **Redis**: 0.26 → 0.27 (Improved connection handling)
- **Argon2**: 0.5 → 0.6 (Better password hashing security)
- **Turbo**: 2.0.0 → 2.5.0 (Faster build times and caching)

### New Features
- **WebAssembly Build System** - Automated WASM compilation with npm scripts
- **Enhanced Type Safety** - Comprehensive TypeScript definitions
- **Improved Error Handling** - Standardized API error responses
- **Build Optimization** - Turbo pipeline enhancements for faster development

### Bug Fixes
- Fixed Redis async connection types
- Corrected route handler return types
- Resolved missing dependency issues
- Fixed metadata conflicts in client components
- Standardized authentication module structure

## 🏗️ Architecture

### Frontend Architecture
- **App Router** - File-based routing with layouts
- **Server Components** - Server-side rendering for performance
- **Client Components** - Interactive UI components
- **Partial Pre-rendering** - Hybrid static/dynamic rendering
- **Image Optimization** - Next.js Image component with WebP/AVIF

### Backend Architecture
- **Axum Framework** - Async HTTP server
- **Layered Architecture** - Handlers → Services → Repositories
- **Database Abstractions** - SQLx for PostgreSQL, MongoDB driver
- **Authentication** - JWT with refresh token rotation
- **Caching** - Redis for sessions and frequently accessed data

### Data Layer
- **PostgreSQL** - ACID transactions for orders and users
- **MongoDB** - Flexible schema for products and reviews
- **Redis** - Fast caching and session storage

## 🔧 Configuration

### Environment Variables

**Backend (.env)**
```env
DATABASE_URL=postgresql://user:password@localhost/perfume_shop
MONGODB_URL=mongodb://localhost:27017/perfume_shop
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-jwt-secret-key
JWT_REFRESH_SECRET=your-jwt-refresh-secret-key
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
MEILISEARCH_URL=http://localhost:7700
MEILISEARCH_KEY=masterKey
```

**Frontend (.env.local)**
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd apps/web
npm run build
vercel --prod
```

### Backend (Fly.io)
```bash
cd apps/api
fly deploy
```

### Database Setup
- **PostgreSQL** - Managed service (AWS RDS, Supabase)
- **MongoDB** - MongoDB Atlas
- **Redis** - Upstash Redis

## 🧪 Testing

```bash
# Frontend tests
cd apps/web
npm run test

# Backend tests
cd apps/api
cargo test

# Integration tests
npm run test:integration
```

## 📊 Performance

- **Lighthouse Score** - Target: 90+ across all metrics
- **Core Web Vitals** - LCP < 2.5s, CLS < 0.1, TBT < 200ms
- **Bundle Size** - Optimized with Next.js and WebAssembly
- **Database Performance** - Indexed queries and connection pooling

## 🔒 Security

- **Authentication** - JWT with Argon2 password hashing
- **Authorization** - Role-based access control
- **Input Validation** - Zod schemas and Rust validation
- **CORS** - Configured for production domains
- **Rate Limiting** - Redis-based rate limiting
- **Security Headers** - CSP, HSTS, and other security headers

## 📈 Monitoring

- **Logging** - Structured JSON logs with tracing
- **Metrics** - OpenTelemetry integration
- **Error Tracking** - Sentry integration
- **Performance** - Real User Monitoring (RUM)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by luxury fragrance industry best practices
- Community-driven development approach
