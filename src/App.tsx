// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Appointments from "./components/appointments";
import MainLayout from "./layouts/main";
import Patients from "./components/patients";
import Chats from "./components/chats";
import ProtectedRoute from "./components/shared/protected-route";
import Signup from "./components/register";
import UnProtectedRoute from "./components/shared/unprotected-route";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<UnProtectedRoute element={<Login />} />} />
          <Route
            path="/register"
            element={<UnProtectedRoute element={<Signup />} />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                element={
                  <MainLayout>
                    <Dashboard />
                  </MainLayout>
                }
              />
            }
          />
          <Route
            path="/appointments"
            element={
              <ProtectedRoute
                element={
                  <MainLayout>
                    <Appointments />
                  </MainLayout>
                }
              />
            }
          />
          <Route
            path="/patients"
            element={
              <ProtectedRoute
                element={
                  <MainLayout>
                    <Patients />
                  </MainLayout>
                }
              />
            }
          />
          <Route
            path="/chats"
            element={
              <ProtectedRoute
                element={
                  <MainLayout>
                    <Chats />
                  </MainLayout>
                }
              />
            }
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<div />} />}
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
