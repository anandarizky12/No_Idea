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
      <Sidenav />
      <div
        className={` ${
          location.pathname !== "admin"
            ? "static"
            : "static min-h-screen md:ml-64 bg-white"
        }`}
      >
        <Navbar />
        {/* Header */}

        <div
          className={` ${
            location.pathname !== "admin"
              ? "static"
              : "px-6 md:px-5 h-full mx-auto p-5"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
