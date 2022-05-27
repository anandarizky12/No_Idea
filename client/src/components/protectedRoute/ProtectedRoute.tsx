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

  /*
1. cek apa perlu role 
2 jika perlu role, cek role yang diperbolehkan
3 jika tidak perlu role, cek apakah sudah login
4 jika sudah login, redirect ke halaman yang diperbolehkan, jika belum redirect ke halaman login


*/

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
