# NewLineLabs Website

## Overview

NewLineLabs is a modern technology solutions company website built as a single-page application. The project showcases the company's services including web development, cloud services, IoT solutions, embedded systems, mobile apps, and digital marketing. The website features a futuristic design inspired by Linear, Stripe, and Vercel, with a violet-to-teal gradient color scheme and dark mode by default.

## Recent Changes

### Winter Promo (January 5, 2026)
- Updated promotional banner to display "Winter offer: UP TO 50% OFF" (valid Jan 1 - March 31)
- Updated claim page to match "Winter offer" with 50% discount
- Updated PromoSplash component image alt text to match new offer
- All "70% OFF" and "Nov 1 - Dec 31" references replaced with new winter sale details

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server

**UI Component Library**: Radix UI primitives with shadcn/ui styling system
- All UI components follow a consistent design system with dark mode support
- Components utilize CVA (Class Variance Authority) for variant management
- Tailwind CSS for styling with custom HSL color variables

**Routing**: Wouter for client-side routing
- Minimal routing setup with HomePage and NotFound pages
- Router configured in App.tsx with Switch/Route pattern

**State Management**: 
- TanStack Query (React Query) for server state management
- React hooks for local component state
- Custom hooks for reusable logic (use-mobile, use-toast)

**Design System**:
- Custom color palette based on violet/teal gradients
- Typography using Inter font family (700-800 for headlines, 400-500 for body)
- JetBrains Mono for technical/code elements
- Spacing primitives: 4, 8, 12, 16, 20, 24, 32 Tailwind units
- Max container width: 7xl with responsive padding

### Backend Architecture

**Runtime**: Node.js with Express.js server

**API Design**:
- RESTful API endpoints prefixed with `/api`
- Routes registered in `server/routes.ts`
- Storage abstraction layer (`IStorage` interface) for database operations
- Request/response logging middleware for API endpoints

**Development Setup**:
- Vite integration in development mode with HMR support
- Custom middleware for JSON response logging
- Error handling middleware for unified error responses

### Data Storage

**Database**: PostgreSQL via Neon serverless

**ORM**: Drizzle ORM with WebSocket support for Neon
- Schema defined in `shared/schema.ts`
- Type-safe database operations with Drizzle Zod integration
- Migration files stored in `./migrations`

**Schema Tables**:
- `users`: User authentication (id, username, password)
- `contact_submissions`: Contact form submissions (id, name, email, subject, message, createdAt)
- `newsletter_signups`: Newsletter email collection (id, email, createdAt)

**Storage Layer**:
- `DatabaseStorage` class implements `IStorage` interface
- CRUD operations abstracted for testability
- Type-safe insert/select operations using Drizzle and Zod schemas

### Email System

**SMTP Configuration**: Zoho Mail (India region - smtp.zoho.in)
- Port 465 with SSL/TLS encryption
- Sending from: info@newlinelabs.tech
- Admin notifications to: contact-us@newlinelabs.tech

**Email Services**:
- `server/email.ts`: Contact form email notifications
- `server/newsletter-email.ts`: Newsletter subscription emails

**Newsletter Subscription Flow**:
1. User submits email via footer newsletter form
2. Backend validates email using `insertNewsletterSignupSchema`
3. Welcome email sent to subscriber with professional branded template
4. Admin notification sent to contact-us@newlinelabs.tech
5. Success/error feedback displayed via toast notifications

**Email Templates**:
- Professional HTML templates with gradient headers (#7c3aed brand color)
- Mobile-responsive card-based layouts
- Consistent branding with NewLineLabs design system

### External Dependencies

**UI Framework Dependencies**:
- Radix UI: Headless component primitives for accessibility
- shadcn/ui: Pre-built styled components using Radix
- Tailwind CSS: Utility-first CSS framework
- Lucide React: Icon library

**Database & ORM**:
- Neon Serverless PostgreSQL: Cloud-hosted database
- Drizzle ORM: Type-safe database toolkit
- Drizzle Zod: Runtime schema validation

**Form Management**:
- React Hook Form: Form state management
- Hookform Resolvers: Validation resolver library
- Zod: Schema validation

**Development Tools**:
- Vite: Build tool and dev server
- TypeScript: Static type checking
- esbuild: Production bundling for server
- Replit plugins: Runtime error overlay, cartographer, dev banner

**Utilities**:
- class-variance-authority: Component variant management
- clsx + tailwind-merge: Conditional class merging
- date-fns: Date manipulation
- nanoid: Unique ID generation
- wouter: Lightweight routing

**Design Assets**:
- Google Fonts: Architects Daughter, DM Sans, Fira Code, Geist Mono
- Custom generated images stored in `attached_assets/generated_images`
- Stock images stored in `attached_assets/stock_images`