import React from "react";
import { Navigate } from "react-router-dom";

const UserPrivateRoute = ({ children }) => {
  const userAuthToken = localStorage.getItem("customerAuthToken");
  if (!userAuthToken) {
    return <Navigate to={"/user/login"} />;
  } else {
    return children;
  }
};

export default UserPrivateRoute;
