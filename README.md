# Fitness Tracker Web Application

## Project Overview
A comprehensive fitness tracking application built with React and Supabase that helps users manage their workout routines and nutrition goals. The application provides a personalized dashboard for users to track their fitness journey, plan workouts, and monitor nutrition intake.

## Key Features

### Authentication System
- **Google OAuth Integration**
  - Secure sign-in with Google accounts
  - Automatic profile creation
- **Email/Password Authentication**
  - Traditional signup/login system
  - Password recovery functionality
- **Protected Routes**
  - Secure access to user-specific content
  - Session management

### User Dashboard
- **Profile Management**
  - Personal information storage
  - Customizable fitness goals
  - Activity level tracking
  - Metrics tracking (weight, height, age)
- **First-time User Onboarding**
  - Guided profile setup
  - Initial goal setting
  - Activity level assessment

### Workout Planning
- **Interactive Calendar**
  - Daily workout scheduling
  - Exercise plan creation
  - Workout history tracking
- **Workout Logging**
  - Exercise details recording
  - Progress tracking
  - Historical data access

### Nutrition Tracking
- **Daily Nutrition Logs**
  - Calorie tracking
  - Macronutrient monitoring
    - Protein intake
    - Carbohydrate intake
    - Fat intake
- **Progress Visualization**
  - Daily summaries
  - Nutritional goals tracking

## Technical Implementation

### Frontend Architecture
- **React Components**
  - Navbar
  - Dashboard
  - Profile Management
  - Workout Calendar
  - Nutrition Tracker
- **State Management**
  - React Hooks
  - Context API
- **Routing**
  - React Router v6
  - Protected Routes
  - Navigation Guards

### Backend Integration
- **Supabase Setup**
  - Authentication services
  - Database tables
  - Row Level Security
- **Database Schema**
  ```sql
  -- Profiles Table
  create table profiles (
    id uuid references auth.users primary key,
    age integer,
    weight numeric,
    height numeric,
    gender text,
    activity_level text,
    goal text,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
  );

  -- Workout Plans Table
  create table workout_plans (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references auth.users,
    date date,
    exercises text,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
  );

  -- Nutrition Logs Table
  create table nutrition_logs (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references auth.users,
    date date,
    calories numeric,
    protein numeric,
    carbs numeric,
    fats numeric,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
  );
  ```

### Security Implementation
- **Row Level Security Policies**
  - User data isolation
  - Secure access controls
  - Authentication checks
- **API Security**
  - Protected endpoints
  - Data validation
  - Error handling

## User Interface

### Navigation
- **Main Navigation Bar**
  - Home
  - Dashboard (authenticated users)
  - Calculator
  - Results
  - Login/Signup buttons (unauthenticated users)
  - Profile menu (authenticated users)

### Dashboard Layout
- **Profile Section**
  - Personal information display
  - Edit functionality
  - Goal tracking
- **Workout Calendar**
  - Monthly view
  - Daily workout plans
  - Exercise logging
- **Nutrition Section**
  - Daily intake logging
  - Macronutrient breakdown
  - Progress tracking

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Supabase account

### Environment Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file:
   ```
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Start development server:
   ```bash
   npm start
   ```

### Supabase Configuration
1. Create new Supabase project
2. Enable Google OAuth
3. Set up database tables
4. Configure RLS policies
5. Add API keys to environment variables

## Development Guidelines

### Code Structure

### Styling
- Tailwind CSS for styling
- Responsive design principles
- Consistent color scheme
- Mobile-first approach

### State Management
- React hooks for local state
- Context API for global state
- Supabase real-time subscriptions

## Future Enhancements
1. Workout templates
2. Progress photos
3. Social features
4. Mobile app version
5. Exercise library
6. Nutrition recommendations
7. Integration with fitness devices

## Troubleshooting

### Common Issues
1. Authentication errors
   - Check Supabase configuration
   - Verify environment variables
2. Database connection issues
   - Confirm RLS policies
   - Check table permissions
3. UI rendering problems
   - Clear browser cache
   - Update dependencies

### Support
For additional support:
- Check documentation
- Submit issues on GitHub
- Contact development team

## License
This project is licensed under the MIT License.

## Contributors
- Development Team
- Open Source Contributors
- UI/UX Designers

## Acknowledgments
- React.js
- Supabase
- Tailwind CSS
- React Calendar
