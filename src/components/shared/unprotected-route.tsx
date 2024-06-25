import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

interface UnProtectedRouteProps {
  element: React.ReactNode;
}

const UnProtectedRoute: React.FC<UnProtectedRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{element}</>;
};

export default UnProtectedRoute;
