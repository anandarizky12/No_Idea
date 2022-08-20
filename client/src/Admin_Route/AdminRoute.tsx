import { Navigate } from "react-router-dom";
import Layout from "../components/admin/Layout";
import { getCookie } from "../utils/utils";

const AdminRoute = ({ redirectTo, Component }: any) => {
  const isAuth = getCookie("admin_token");
  const role = getCookie("role");
  const allowRole = "admin";

  return isAuth && allowRole === role ? (
    <Layout>{Component}</Layout>
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default AdminRoute;
