# Portfolio Website - Replit Configuration

## Overview

This is a full-stack portfolio website built with modern web technologies. The application showcases professional experience, skills, projects, and includes a blog and contact functionality. It features a sleek, responsive design with smooth animations and a professional presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with shadcn/ui components
- **Build Tool**: Vite for fast development and optimized builds
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom theming

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request logging

### Data Storage Solutions
- **Database**: MongoDB with Mongoose ODM (hybrid with memory fallback)
- **ODM**: Mongoose for MongoDB object modeling and validation
- **Connection**: Local MongoDB instance with fallback to memory storage
- **Production Storage**: MongoDBStorage implementation with automatic fallback
- **Schema**: Mongoose schemas with Zod validation for API inputs
- **Collections**: users, contacts, blog_posts with proper schema validation

## Key Components

### Database Schema
- **Users**: Basic user authentication structure with MongoDB ObjectId
- **Contacts**: Contact form submissions with timestamps and MongoDB ObjectId
- **Blog Posts**: Blog content with metadata, publishing dates, and MongoDB ObjectId  
- **Validation**: Mongoose schemas for data modeling and Zod schemas for API validation
- **Fallback**: Automatic memory storage fallback when MongoDB is unavailable

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Retrieve all contacts (admin)
- `GET /api/blog` - Fetch blog posts
- `POST /api/blog` - Create new blog post

### Frontend Sections
- **Hero**: Dynamic typing animation with call-to-action
- **About**: Professional introduction with achievements
- **Skills**: Technical skills with animated progress bars
- **Projects**: Portfolio showcase with project cards
- **Experience**: Timeline of work experience and education
- **Certifications**: Professional certifications and awards
- **Blog**: Dynamic blog posts from API
- **Contact**: Contact form with validation and submission

### UI Features
- **Theme Support**: Light/dark mode toggle with system preference detection
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Animations**: Smooth scroll, typing effects, and CSS transitions
- **Glass Morphism**: Modern glass effect styling
- **Navigation**: Smooth scrolling navigation with active section highlighting

## Data Flow

### Contact Form Submission
1. User fills out contact form
2. Form validation using Zod schemas
3. API request to `/api/contact` endpoint
4. Data stored in database via Drizzle ORM
5. Success/error feedback to user via toast notifications

### Blog Content
1. Blog posts fetched from `/api/blog` endpoint
2. Data cached using TanStack Query
3. Posts displayed with category badges and timestamps
4. Responsive grid layout for optimal viewing

### Theme Management
1. Theme preference stored in localStorage
2. System preference detection via media queries
3. CSS variables for consistent theming
4. Smooth transitions between light/dark modes

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **drizzle-orm**: Type-safe database operations
- **@neondatabase/serverless**: PostgreSQL connection
- **zod**: Schema validation
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Utility class management

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundler
- **PostCSS**: CSS processing
- **Tailwind CSS**: Utility-first CSS framework

### UI Enhancement
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality
- **Wouter**: Lightweight routing
- **Date-fns**: Date manipulation utilities

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Type Checking**: TypeScript compilation validation
4. **Database Migration**: Drizzle migrations applied via `db:push`

### Environment Configuration
- **Development**: `NODE_ENV=development` with hot reload
- **Production**: `NODE_ENV=production` with optimized builds
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Deployment Commands
- `npm run dev` - Development server with hot reload
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Database schema updates

### Server Configuration
- **Static Files**: Express serves built frontend from `dist/public`
- **API Routes**: Express handles API endpoints under `/api`
- **Fallback**: SPA routing handled by serving index.html for unknown routes
- **Error Handling**: Comprehensive error middleware for production stability

The application is designed to be deployed on platforms like Replit, Vercel, or traditional VPS environments with minimal configuration changes.