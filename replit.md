# Portfolio Application - S. Ranjan Mishra

## Overview

This is a modern, responsive portfolio website for S. Ranjan Mishra, a PhD in Mechanical & Industrial Engineering specializing in medical device development, data science, and business intelligence. The application showcases professional experience, research publications, projects, and provides a contact mechanism.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend and backend components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store

## Key Components

### Frontend Components
1. **Navigation**: Responsive navigation with theme switching and smooth scrolling
2. **Hero Section**: Landing area with personal branding and call-to-action buttons
3. **About Section**: Professional summary with skills visualization
4. **Experience Timeline**: Interactive timeline showcasing work history
5. **Projects Section**: Portfolio of featured projects with technology badges
6. **Publications Section**: Research publications and academic achievements
7. **Contact Section**: Contact form with real-time validation and submission

### Backend Services
1. **Contact API**: Handles contact form submissions with validation
2. **Resume Download**: Serves PDF resume files
3. **Message Storage**: Stores contact messages in PostgreSQL database
4. **Static File Serving**: Serves built frontend assets in production

### Shared Components
1. **Database Schema**: Shared Drizzle schema definitions for type safety
2. **Validation**: Zod schemas for runtime type checking and validation

## Data Flow

1. **Frontend**: User interactions trigger API calls via TanStack Query
2. **API Layer**: Express routes handle requests with validation
3. **Data Layer**: Drizzle ORM manages database operations
4. **Response**: JSON responses with consistent error handling
5. **UI Updates**: TanStack Query manages cache invalidation and UI updates

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, TypeScript
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Database**: Neon Database (serverless PostgreSQL)
- **Animation**: Framer Motion for smooth transitions
- **Forms**: React Hook Form with Hookform Resolvers

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **CSS**: Tailwind CSS with PostCSS processing
- **Database Migrations**: Drizzle Kit for schema management
- **Development**: tsx for TypeScript execution

### Production Services
- **Database**: Neon Database for PostgreSQL hosting
- **File Storage**: Local file system for resume and assets
- **Session Store**: PostgreSQL-based session storage

## Deployment Strategy

### Development Environment
- Vite dev server with HMR for frontend development
- tsx for running TypeScript server with hot reload
- Integrated development with shared TypeScript configuration

### Production Build
1. Frontend build via Vite generating optimized static assets
2. Server build via esbuild creating bundled Node.js application
3. Database schema deployment via Drizzle migrations
4. Static asset serving through Express in production mode

### Environment Configuration
- Environment variables for database connections
- Conditional development tooling (Replit integration)
- Production optimizations for asset serving and bundling

## Changelog

```
Changelog:
- June 28, 2025. Initial setup with React portfolio website
- June 28, 2025. Added PostgreSQL database integration with DatabaseStorage
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```