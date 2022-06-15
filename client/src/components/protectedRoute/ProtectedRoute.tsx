import { Navigate } from "react-router-dom";
import { getCookie } from "../../utils/utils";
import Unauthorized from "../404/Unauthorized";

export default function ProtectedRoute({
  Component,
  redirectTo,
  allowRole,
}: any) {
  let isAuthenticated = getCookie("token");
  const role = getCookie("role");

  return isAuthenticated ? (
    allowRole ? (
      allowRole == role ? (
        Component
      ) : (
        <Unauthorized />
      )
    ) : (
      Component
    )
  ) : (
    <Navigate to={redirectTo} />
  );
}
