import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ role }) => {
  let location = useLocation();
  const isLoggedIn = true;

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
