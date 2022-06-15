import PropType from "prop-types";
import { connect } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import Unauthorized from "../components/404/Unauthorized";
import Layout from "../components/admin/Layout";
import { getCookie } from "../utils/utils";

const AdminRoute = ({ redirectTo, component: Component, ...rest }: any) => {
  const isAuth = getCookie("admin_token");
  const role = getCookie("role");
  const allowRole = "Admin";

  return isAuth ? (
    allowRole ? (
      allowRole == role ? (
        Component
      ) : (
        <Unauthorized />
      )
    ) : (
      <Layout>Component</Layout>
    )
  ) : (
    <Navigate to={redirectTo} />
  );
};

// const mapStateToProps = ({ auth }: any) => ({
//   isAuth: !!auth,
//   role: auth?.role || "",
// });

// AdminRoute.defaultProps = {
//   isAuth: false,
//   role: "USER",
// };

// AdminRoute.propTypes = {
//   isAuth: PropType.bool,
//   role: PropType.string,
//   component: PropType.func.isRequired,
//   // eslint-disable-next-line react/require-default-props
//   rest: PropType.any,
// };

export default AdminRoute;
