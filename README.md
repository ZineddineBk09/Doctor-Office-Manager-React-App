## Doctor Office Management App

This Doctor Office Management application allows doctors to manage appointments, patient records, and medical history. The app is built with React, TypeScript, and Redux Toolkit, with Firebase for authentication and Tailwind CSS for styling.

### Table of Contents

- [Doctor Office Management App](#doctor-office-management-app)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
  - [Features](#features)
  - [Redux Slices](#redux-slices)
  - [Components](#components)
  - [API Integration](#api-integration)
  - [Styling](#styling)
  - [Authentication](#authentication)
  - [Contributing](#contributing)
  - [Pages](#pages)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/doctor-office-management.git
   cd doctor-office-management
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

### Project Structure

```
├── components
├── lib
├── public
│   └── images
│       └── screenshots
└── src
    ├── assets
    ├── components
    │   ├── appointments
    │   │   ├── dialogs
    │   │   └── table
    │   ├── chats
    │   ├── dashboard
    │   │   ├── charts
    │   │   └── data
    │   ├── login
    │   ├── patients
    │   │   ├── dialogs
    │   │   └── table
    │   ├── register
    │   ├── shared
    │   └── ui
    ├── data
    ├── features
    ├── hooks
    ├── layouts
    ├── lib
    ├── services
    └── utils
```

### Available Scripts

- **`npm start`**: Starts the development server.
- **`npm build`**: Builds the app for production.
- **`npm test`**: Runs the test suite.
- **`npm eject`**: Ejects the create-react-app configuration.

### Features

- **User Authentication**: Users can sign up, log in, and log out.
- **Dashboard**: A comprehensive dashboard displaying various statistics.
- **Appointments**: Manage appointments including viewing, adding, editing, and deleting.
- **Patients**: View and manage patient details and medical history.
- **Chats**: Communicate with patients via a messaging interface.

### Redux Slices

- **authSlice.ts**: Handles user authentication.
- **appointmentSlice.ts**: Manages appointment data.
- **patientSlice.ts**: Manages patient data.
- **messageSlice.ts**: Handles chat messages.

### Components

- **Login**: User login form.
- **Register**: User registration form.
- **Dashboard**: Main dashboard with statistics and charts.
- **Appointments**: Appointment list and management.
- **Patients**: Patient list and details.
- **Chats**: Messaging interface.
- **Shared**: Shared components like protected routes.
- **UI**: Reusable UI components like buttons, inputs, dialogs, etc.

### API Integration

- **lib/axios.ts**: Axios instance configured for API requests.
- **services/api.ts**: API service functions for handling data fetching and mutation.

### Styling

- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Sass**: Preprocessor for additional styling capabilities.

### Authentication

- **Firebase**: Firebase authentication for user management.
- **useAuth Hook**: Custom hook for managing authentication state.

### Contributing

1. **Fork the repository**.
2. **Create a new branch** (`git checkout -b feature-branch`).
3. **Make your changes**.
4. **Commit your changes** (`git commit -m 'Add some feature'`).
5. **Push to the branch** (`git push origin feature-branch`).
6. **Open a pull request**.


### Pages

- **Login**: The login page where users can sign in.
   <img src="public/images/screenshots/login page.png" alt="Login" width="750">

- **Register**: The registration page where users can sign up.
   <img src="public/images/screenshots/register page.png" alt="Register" width="750">

- **Dashboard**: The main dashboard page with statistics and charts.
   <img src="public/images/screenshots/dashboard page.png" alt="Dashboard" width="750">

- **Appointments**: The appointments page for managing appointments.
   <img src="public/images/screenshots/appointments page.png" alt="Appointments" width="750">

- **Patients**: The patients page for managing patient records.
   <img src="public/images/screenshots/patients page.png" alt="Patients" width="750">

- **Chats**: The messaging interface for communicating with patients.
   <img src="public/images/screenshots/chats page.png" alt="Chats" width="750">
