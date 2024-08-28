import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const adminAuthtoken = localStorage.getItem("adminAuthToken");
  if (!adminAuthtoken) {
    return <Navigate to={"/admin/login"} />;
  } else {
    return children;
  }
};

export default AdminPrivateRoute;
