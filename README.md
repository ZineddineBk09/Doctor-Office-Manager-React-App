## Doctor Office Management App

This Doctor Office Management application allows doctors to manage appointments, patient records, and medical history. The app is built with React, TypeScript, and Redux Toolkit, with Firebase for authentication and Tailwind CSS for styling.

### Table of Contents

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
- [License](#license)

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
├── components.json
├── lib
│   └── utils.ts
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── images
│   │   └── login-bg.jpg
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   ├── components
│   │   ├── appointments
│   │   │   ├── dialogs
│   │   │   │   └── edit.tsx
│   │   │   └── index.tsx
│   │   ├── chats
│   │   │   └── index.tsx
│   │   ├── dashboard
│   │   │   └── index.tsx
│   │   ├── login
│   │   │   └── index.tsx
│   │   ├── patients
│   │   │   ├── dialogs
│   │   │   │   └── edit.tsx
│   │   │   └── index.tsx
│   │   ├── register
│   │   │   └── index.tsx
│   │   ├── shared
│   │   │   ├── delete.tsx
│   │   │   ├── protected-route.tsx
│   │   │   └── unprotected-route.tsx
│   │   └── ui
│   │       ├── alert-dialog.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── pagination.tsx
│   │       ├── progress.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       └── tooltip.tsx
│   ├── data
│   │   └── examples.ts
│   ├── features
│   │   ├── appointmentSlice.ts
│   │   ├── authSlice.ts
│   │   ├── messageSlice.ts
│   │   └── patientSlice.ts
│   ├── hooks
│   │   └── useAuth.ts
│   ├── index.css
│   ├── index.tsx
│   ├── interfaces.ts
│   ├── layouts
│   │   └── main.tsx
│   ├── lib
│   │   ├── axios.ts
│   │   └── utils.ts
│   ├── services
│   │   ├── api.ts
│   │   └── firebase.ts
│   └── store.ts
├── tailwind.config.js
└── tsconfig.json
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

### License

No license.