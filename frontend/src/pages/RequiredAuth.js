import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function RequiredAuth({ allowedRoles }) {
  const { auth } = useAuth();
  const location = useLocation();
  console.log(auth.roles);

  return auth?.roles === allowedRoles ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
