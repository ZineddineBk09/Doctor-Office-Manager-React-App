// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Appointments from "./components/appointments";
import MainLayout from "./layouts/main";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            }
          />
          <Route
            path="/appointments"
            element={
              <MainLayout>
                <Appointments />
              </MainLayout>
            }
          />
          <Route path="/patients" element={<div />} />
          <Route path="/messages" element={<div />} />
          <Route path="/profile" element={<div />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
