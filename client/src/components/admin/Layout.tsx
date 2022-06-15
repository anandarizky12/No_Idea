import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// components
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

function Layout({ children }: any) {
  const location = useLocation();
  const navigate = useNavigate();
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
