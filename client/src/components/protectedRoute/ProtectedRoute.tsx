import { Navigate } from "react-router-dom";
import { getCookie } from "../../utils/utils";

export default function ProtectedRoute({ Component, redirectTo }: any) {
  let isAuthenticated = getCookie("token");

  return isAuthenticated ? Component : <Navigate to={redirectTo} />;
}
