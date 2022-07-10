import { useLocation } from "react-router-dom";
// components
import Navbar from "./Navbar";

function Layout({ children }: any) {
  const location = useLocation();
  return (
    <>
      {/* <Sidenav /> */}
      <div
        className={` ${
          location.pathname !== "/admin"
            ? "static"
            : "static min-h-screen bg-white"
        }`}
      >
        <Navbar />
        {/* Header */}

        <div
          className={` ${
            location.pathname !== "/admin" ? "static" : "h-full  mx-auto"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
