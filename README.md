# CareerHub - Job Portal Application

CareerHub is a modern job portal application designed to connect job seekers (candidates) with employers (recruiters). It provides a seamless platform for posting jobs, applying to jobs, managing applications, and saving jobs for later. Built with React, Supabase, and Clerk, CareerHub offers a responsive and user-friendly experience for both candidates and recruiters.

## Features
### For Candidates
- Browse Jobs: Search and filter jobs by title, location, or company.
- Apply to Jobs: Submit applications with resumes, skills, education, and experience.

### Save Jobs: Save jobs to apply later.
- Track Applications: View the status of your applications (e.g., applied, interviewing, hired, rejected).

### For Recruiters
- Post Jobs: Create and publish job listings with details like title, description, and requirements.
- Manage Jobs: Update job status (open/closed) and view applications.
- Add Companies: Add new companies with logos to post jobs.

### General Features
- Authentication: Secure sign-up and login using Clerk.
- Role-Based Access: Separate dashboards for candidates and recruiters.
- Responsive Design: Optimized for desktop, tablet, and mobile devices.
- Dark/Light Mode: Supports system preferences for light and dark themes.

## Technology Stack
### Frontend
- React: Core library for building the UI.
- Vite: Build tool for fast development and production builds.
- Tailwind CSS: Utility-first CSS framework for styling.
- Radix UI: Primitive components for accessible UI elements.
- Lucide React: Icon library for UI icons.
- React Hook Form: Form management with validation using Zod.
- React Router DOM: Routing for navigation between pages.

### Backend
- Supabase: Backend-as-a-service for database and storage.
- Stores job listings, applications, companies, and user data.
- Handles file uploads (e.g., resumes, company logos).
- Clerk: Authentication and user management.
- Handles sign-up, login, and role assignment.

Other Libraries
- Zod: Schema validation for forms.
- Embla Carousel: For the company logo carousel on the landing page.
- React Spinners: Loading spinners for async operations.
- Country-State-City: For location data (e.g., states in India).

## Usage
### For Candidates
- Sign up or log in as a candidate.
- Browse jobs using the search and filters.
- Apply to jobs by submitting your resume and details.
- Save jobs to apply later and track your applications.
### For Recruiters
- Sign up or log in as a recruiter.
- Post new jobs by providing details like title, description, and requirements.
- Manage your posted jobs and view applications.
- Add new companies with logos to post jobs.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
