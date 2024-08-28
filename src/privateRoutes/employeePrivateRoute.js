import React from "react";
import { Navigate } from "react-router-dom";

const EmployeePrivateRoute = ({ children }) => {
  const employeeAuthToken = localStorage.getItem("employeeAuthToken");
  if (!employeeAuthToken) {
    return <Navigate to={"/employee/login"} />;
  } else {
    return children;
  }
};

export default EmployeePrivateRoute;
