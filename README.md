# Busola - Geography Tutoring Platform

A comprehensive e-learning platform for geography tutoring by Grzegorz Natanek, featuring a modern landing page and a full-featured Learning Management System (LMS).

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [Architecture](#architecture)
- [Key Concepts](#key-concepts)
- [Scripts](#scripts)

## 🎯 Overview

Busola is a bilingual (Polish) platform designed to provide geography tutoring services. It consists of two main parts:

1. **Public Website**: A marketing landing page showcasing the tutor's services, testimonials, and contact information
2. **Student Portal**: An authenticated learning management system where students can access courses, watch video lessons, take quizzes, and track their progress

## 🛠 Tech Stack

### Core Technologies

- **Framework**: [Next.js 15.4.4](https://nextjs.org/) (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.x
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)

### State Management & Data Fetching

- **React Query**: @tanstack/react-query (v5.85.3) - Server state management, caching, and data synchronization
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime schema validation

### Content Management

- **Contentful CMS**: Headless CMS for rich text content, images, and file assets
- **Rich Text Renderer**: @contentful/rich-text-react-renderer

### UI Components & Libraries

- **Video Player**: react-player for lesson videos
- **Image Slider**: @splidejs/react-splide
- **Notifications**: react-hot-toast
- **Responsive Design**: react-responsive for device detection

### Development Tools

- **Code Quality**: ESLint 9, Prettier
- **Git Hooks**: Husky + lint-staged
- **TypeScript Config**: Strict mode enabled
- **Package Manager**: npm

## ✨ Features

### Public Website

- **Hero Section**: Engaging introduction to the tutor
- **Statistics Banner**: Key metrics and achievements
- **About Me**: Personal introduction and teaching philosophy
- **Services**: Overview of tutoring offerings
- **Testimonials**: Student reviews with photo slider
- **Call-to-Action Banner**: Encouraging visitors to take action
- **Contact Form**: Direct communication with the tutor
- **Responsive Design**: Fully responsive across all devices

### Student Portal (Dashboard)

#### Authentication System

- **Secure Sign-In**: Token-based authentication with refresh tokens
- **Password Reset Flow**: 
  - Email-based password recovery
  - Code verification
  - Password confirmation
- **Initial Password Reset**: Forced password change for new users
- **Session Management**: Automatic token refresh with 401 handling
- **Protected Routes**: Middleware-based route protection

#### Course Management

- **Course Dashboard**: View all enrolled courses with progress indicators
- **Course Details**: 
  - Rich text descriptions from Contentful
  - Course images
  - Progress tracking
  - Enrollment date display
  - Lesson listings
- **Progress Bar**: Visual representation of course completion

#### Lesson System

- **Lesson Content**:
  - Rich text content with custom formatting
  - Embedded video lessons (YouTube, Vimeo, etc.)
  - Task files (downloadable PDFs)
  - Task explanation videos
- **Lesson Navigation**: Sequential navigation between lessons
- **Completion Tracking**: Mark lessons as completed
- **Personal Notes**: Students can write and save notes for each lesson

#### Quiz System

- **Interactive Quizzes**: Multiple-choice questions
- **Quiz Attempts**: Track and display all quiz attempts
- **Score Tracking**: Percentage-based scoring
- **Validation**: Form validation using Zod schemas

#### User Experience

- **Loading States**: Spinner components with contextual messages
- **Error Handling**: Toast notifications for user feedback
- **Responsive Design**: Mobile-first approach
- **Smooth Navigation**: Client-side routing with loading states

## 📁 Project Structure

```
busola-ui/
├── public/                      # Static assets
│   ├── busola-korepetycje-logo-*.png
│   ├── hero-final.jpg
│   ├── icons and images
│   └── opinion photos
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (website)/          # Public website route group
│   │   │   ├── page.tsx        # Landing page
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutMe.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Testimony.tsx
│   │   │   ├── StatsBanner.tsx
│   │   │   ├── Banner.tsx
│   │   │   └── Contact.tsx
│   │   ├── (portal)/           # Authenticated portal route group
│   │   │   ├── auth/           # Authentication pages
│   │   │   │   ├── sign-in/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── SignInForm.tsx
│   │   │   │   │   └── signInValidationSchema.tsx
│   │   │   │   ├── reset-password/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── ResetPasswordForm.tsx
│   │   │   │   │   ├── verify-code/
│   │   │   │   │   │   ├── page.tsx
│   │   │   │   │   │   └── VerifyCodeForm.tsx
│   │   │   │   │   └── confirm/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── reset-initial-password/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── ConfirmPasswordForm.tsx
│   │   │   │   ├── resetPasswordValidation.tsx
│   │   │   │   └── layout.tsx
│   │   │   └── dashboard/      # Student portal
│   │   │       ├── page.tsx
│   │   │       ├── CoursesList.tsx
│   │   │       ├── CourseListItem.tsx
│   │   │       └── course/
│   │   │           └── [courseId]/
│   │   │               ├── page.tsx
│   │   │               ├── LessonsList.tsx
│   │   │               ├── LessonListItem.tsx
│   │   │               └── lesson/
│   │   │                   └── [lessonId]/
│   │   │                       ├── page.tsx
│   │   │                       ├── Quiz.tsx
│   │   │                       ├── Question.tsx
│   │   │                       ├── QuizSection.tsx
│   │   │                       ├── QuizAttemptsResults.tsx
│   │   │                       ├── NotesSection.tsx
│   │   │                       ├── MarkAsCompletedButton.tsx
│   │   │                       └── quizValidationSchema.ts
│   │   ├── api/                # API routes
│   │   │   └── auth/
│   │   │       └── session/
│   │   │           └── route.ts
│   │   ├── layout.tsx          # Root layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   └── favicon.ico
│   ├── lib/                    # Shared library code
│   │   ├── api/
│   │   │   ├── apiClient.ts    # Centralized API client with token refresh
│   │   │   └── queryKeysFactory.ts  # React Query key management
│   │   ├── components/
│   │   │   ├── Button.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── Title.tsx
│   │   │   ├── Tooltip.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── PhotoSlider.tsx
│   │   │   ├── VideoPlayer.tsx
│   │   │   ├── AuthFormContainer.tsx
│   │   │   ├── form/
│   │   │   │   ├── Form.tsx
│   │   │   │   ├── FormInput.tsx
│   │   │   │   ├── RadioGroup.tsx
│   │   │   │   └── RadioOption.tsx
│   │   │   ├── contentful/
│   │   │   │   └── ContentfulRichTextContent.tsx
│   │   │   └── website/
│   │   │       ├── Container.tsx
│   │   │       ├── LoginButton.tsx
│   │   │       ├── LogoutButton.tsx
│   │   │       ├── MobileMenuButton.tsx
│   │   │       ├── WebsiteTitle.tsx
│   │   │       └── navigation/
│   │   │           ├── Navigation.tsx
│   │   │           └── MobileNavigation.tsx
│   │   ├── contentful/
│   │   │   └── contentful.ts   # Contentful client configuration
│   │   ├── context/
│   │   │   └── ResetPasswordContext.tsx
│   │   ├── hooks/
│   │   │   ├── useAuthSession.ts
│   │   │   └── useResetPassword.ts
│   │   ├── icons/              # SVG icon components
│   │   │   ├── ArrowLeftIcon.tsx
│   │   │   ├── ArrowRightIcon.tsx
│   │   │   ├── CheckIcon.tsx
│   │   │   ├── CloseIcon.tsx
│   │   │   ├── DownloadIcon.tsx
│   │   │   ├── EmailIcon.tsx
│   │   │   ├── FacebookIcon.tsx
│   │   │   ├── HamburgerIcon.tsx
│   │   │   ├── InstagramIcon.tsx
│   │   │   ├── LoginIcon.tsx
│   │   │   ├── LogoutIcon.tsx
│   │   │   └── PhoneIcon.tsx
│   │   ├── providers/
│   │   │   ├── AuthProvider.tsx
│   │   │   └── ReactQueryProvider.tsx
│   │   ├── routes/
│   │   │   └── routes.ts       # Centralized route definitions
│   │   ├── types/
│   │   │   ├── common.ts
│   │   │   └── courses.ts      # TypeScript interfaces for domain models
│   │   └── validators/
│   │       └── password.ts
│   └── middleware.ts           # Route protection middleware
├── .gitignore
├── eslint.config.mjs
├── lint-staged.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm (comes with Node.js)
- Contentful account with configured space
- Backend API server running

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd busola-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory (see [Environment Variables](#environment-variables))

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Contentful CMS Configuration
NEXT_PUBLIC_BUSOLA_CMS_SPACE_ID=your_contentful_space_id
NEXT_PUBLIC_BUSOLA_CMS_ENVIRONMENT=master
NEXT_PUBLIC_BUSOLA_CMS_API_KEY=your_contentful_access_token

# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:your_backend_port

# Contact form delivery. Use `route-handler` on Vercel to send via Resend.
NEXT_PUBLIC_CONTACT_MESSAGE_DELIVERY=external-backend

# Required only for `route-handler`. Keep these server-only: do not use NEXT_PUBLIC_.
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=Busola <contact@your-domain.com>
CONTACT_TO_EMAIL=your_inbox@example.com

# Student portal login (disabled by default, including in production)
NEXT_PUBLIC_ENABLE_LOGIN=false

# External shop URL (leave empty to hide the navigation link)
NEXT_PUBLIC_SHOP_URL=https://shop.example.com
```

### Where to get these values:

#### Contentful CMS
1. Sign in to your [Contentful](https://www.contentful.com/) account
2. Go to **Settings** → **API keys**
3. Create a new API key or use an existing one
4. Copy:
   - **Space ID**: `NEXT_PUBLIC_BUSOLA_CMS_SPACE_ID`
   - **Content Delivery API - access token**: `NEXT_PUBLIC_BUSOLA_CMS_API_KEY`
   - **Environment**: Usually `master` (default)

#### Backend API
- Set `NEXT_PUBLIC_API_URL` to your backend server URL
- For local development: `http://localhost:PORT`
- For production: Your deployed backend URL

#### Contact form delivery
- `NEXT_PUBLIC_CONTACT_MESSAGE_DELIVERY=external-backend` preserves the existing `POST /contact/message` request to `NEXT_PUBLIC_API_URL`.
- Set it to `route-handler` to use `POST /api/contact` deployed with the Next.js app on Vercel. The route sends the email through Resend, so set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in Vercel Project Settings. `CONTACT_FROM_EMAIL` must use a verified Resend domain.
- `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` must never have the `NEXT_PUBLIC_` prefix; add them for Production (and Preview if you intend to submit from preview deployments), then redeploy.

#### Login feature flag
- Set `NEXT_PUBLIC_ENABLE_LOGIN=true` to show the login controls and enable the authentication pages.
- Leave it unset or set it to `false` to hide the controls and return a 404 for `/auth/*` routes. Because it is a `NEXT_PUBLIC_` variable, set it when building the application.

#### Shop link
- Set `NEXT_PUBLIC_SHOP_URL` to the external shop address. The **Sklep** link is hidden when it is not configured. Because it is a `NEXT_PUBLIC_` variable, set it when building the application.

## 💻 Development

### Code Quality Tools

The project uses several tools to maintain code quality:

- **TypeScript**: Static type checking
- **ESLint**: Code linting with Next.js and TypeScript rules
- **Prettier**: Code formatting with Tailwind CSS plugin
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files

### Git Workflow

Pre-commit hooks automatically run:
1. Prettier formatting
2. TypeScript type checking
3. ESLint with auto-fix

### Project Scripts

```bash
# Development server with Turbopack
npm run dev

# Type checking
npm run typecheck

# Linting
npm run lint         # Check for linting errors
npm run lint:fix     # Fix linting errors automatically

# Code formatting
npm run format       # Check formatting

# Production build
npm run build

# Start production server
npm start
```

## 🏗 Architecture

### Routing Architecture

The application uses **Next.js App Router** with **route groups** for organization:

#### Route Groups

1. **`(website)`**: Public website
   - No authentication required
   - Landing page sections
   - Public header/footer

2. **`(portal)`**: Authenticated portal
   - Requires authentication (protected by middleware)
   - Student dashboard
   - Course and lesson pages
   - Auth pages (sign-in, password reset)

### Middleware

Located in `src/middleware.ts`, the middleware:
- Protects `/dashboard/*` routes
- Checks for `refresh_token` cookie
- Redirects unauthenticated users to sign-in page

### Authentication Flow

1. **Sign In**:
   - User submits credentials via `SignInForm`
   - API returns tokens set as HTTP-only cookies
   - User redirected to dashboard or password reset page

2. **Token Management**:
   - `access_token`: Short-lived token for API requests
   - `refresh_token`: Long-lived token for refreshing access
   - Automatic refresh on 401 responses via `apiClient`

3. **Session Checking**:
   - `useAuthSession` hook polls `/api/auth/session` every 15 seconds
   - `AuthProvider` provides global authentication state

### API Integration

#### API Client (`lib/api/apiClient.ts`)

Centralized HTTP client with features:
- Automatic token refresh on 401 errors
- Credentials included (cookies)
- Error handling with user-friendly messages
- TypeScript generic return types

#### React Query Setup

- **Provider**: `ReactQueryProvider` wraps the app
- **Query Keys**: Factory pattern in `queryKeysFactory.ts`
- **DevTools**: Enabled in development
- **Caching**: Automatic background refetching

### Contentful CMS Integration

#### Content Types

The application uses Contentful for:
- **Rich Text Content**: Course and lesson descriptions
- **Images**: Course thumbnails
- **Files**: Downloadable task PDFs

#### Rich Text Rendering

Custom renderer in `ContentfulRichTextContent.tsx`:
- Headings (H3)
- Paragraphs
- Unordered lists
- Bold text
- Custom styling with Tailwind classes

### State Management

#### Server State (React Query)

- Course data
- Lesson data
- User information
- Quiz data
- Contentful assets

#### Client State

- Form state (React Hook Form)
- Authentication state (Context API)
- Reset password flow (Context API)
- UI state (local component state)

## 🧩 Key Concepts

### Type Safety

All data structures are typed with TypeScript interfaces:

```typescript
// Example from lib/types/courses.ts
interface User {
  uuid: string;
  email: string;
  name: string;
  lastName: string;
  courses: Course[];
}

interface Course {
  uuid: string;
  name: string;
  shortDescription: string;
  imageCMSId?: string;
  lessonsCompleted: number;
  lessonsCount: number;
}

interface LessonDetails extends Lesson {
  description: string;
  videoUrl?: string;
  tasksFileCMSId?: string;
  tasksVideoUrl?: string;
  content: object;
  order: number;
  previousLessonId?: string;
  nextLessonId?: string;
  notes?: string;
  quizId?: string;
}
```

### Form Validation

Using **Zod** for runtime validation and **React Hook Form** for form state:

```typescript
// Example validation schema
const SignInValidationSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// Usage in form
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(SignInValidationSchema),
  mode: "onBlur",
});
```

### Responsive Design

The project uses:
- **Tailwind CSS**: Mobile-first responsive utilities
- **react-responsive**: JavaScript-based media queries
- **Custom breakpoints**: Defined in Tailwind config

```typescript
// Example usage
const isMobile = useMediaQuery({ maxWidth: 768 });
```

### Custom Styling

CSS variables defined in `globals.css`:

```css
:root {
  --dark-blue: #013172;
  --light-blue: #9fb1ca;
  --dark-beige: #8f6a40;
  --white: #ffffff;
}
```

Custom utility classes:
- `.hoverScale` - Scale to 1.2 on hover
- `.hoverScaleSmall` - Scale to 1.05 on hover
- `.customShadow` - Custom box shadow

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run lint` | Check for ESLint errors |
| `npm run lint:fix` | Fix ESLint errors automatically |
| `npm run format` | Check code formatting with Prettier |
| `npm run prepare` | Set up Husky git hooks (runs automatically) |

## 🤝 Contributing

1. Create a feature branch from `staging`
2. Make your changes
3. Ensure all checks pass (TypeScript, ESLint, Prettier)
4. Submit a pull request to `staging`

## 📝 Notes

- **Language**: The application is in Polish (polski)
- **Browser Support**: Modern browsers (ES2017+)
- **Performance**: Utilizes Next.js App Router optimizations, image optimization, and code splitting
- **SEO**: Metadata configured in layout files
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🐛 Known Issues

- TODO comments in codebase indicate areas for improvement:
  - Error pages need to be added for course/lesson not found scenarios

## 📞 Support

For questions or issues, please contact the project maintainer or open an issue in the repository.

---

**Built with ❤️ using Next.js and React**
