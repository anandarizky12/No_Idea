import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="hidden md:flex h-14 top-0 left-0 w-full z-10  md:flex-row md:flex-nowrap  md:justify-start  items-center p-4 shadow-sm">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <div className="flex items-center">
            <img src={"/logo.png"} width={32} />
            <a
              className="text-gray-500 ml-2 text-sm uppercase hidden md:inline-block font-semibold "
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              SMKN 1 SUKAMARA
            </a>
          </div>

          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            {/* <UserDropdown /> */}
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </div>
  );
}
