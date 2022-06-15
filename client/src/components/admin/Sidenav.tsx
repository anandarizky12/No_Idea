import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import UserDropdown from "./Admin_Dropdown";
import {
  UserOutlined,
  UserAddOutlined,
  DashboardOutlined,
  AuditOutlined,
} from "@ant-design/icons";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  return (
    <div>
      <nav className="z-50 font-sans md:left-0 bg-white md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden flex flex-wrap items-center justify-between relative md:w-64 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            {/* <FaGripLines /> */}
          </button>
          {/* Brand */}

          <a
            onClick={() => navigate("/admin")}
            className="flex flex-row items-center md:pb-2 text-primary mr-0  text-xs md:text-base font-normal p-4 px-0"
          >
            <img width={43} src="/logo.png" className="mr-3" />
            ADMIN
          </a>
          {/* <img src="/logobps.png" alt="" className="w-60" /> */}

          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative md:hidden">
              {/* <UserDropdown /> */}
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-500 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <a
                    href="#pablo"
                    className="md:block text-left md:pb-2 text-primary mr-0 inline-block whitespace-nowrap text-sm  font-bold p-4 px-0"
                  >
                    Buku Tamu
                  </a>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    {/* <FaTimes /> */}
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}

            {/* Divider */}
            <hr className="mb-4 md:min-w-full" />

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <a
                  onClick={() => navigate("/admin")}
                  href="#pablo"
                  className={
                    "text-xs md:text-sm  py-3 font-light flex items-center " +
                    (location.pathname == "/admin"
                      ? "text-blue-500 hover:text-blue-500"
                      : "text-primary hover:text-gray-400")
                  }
                >
                  <DashboardOutlined className="mr-4" />
                  Dashboard
                </a>
              </li>
              <li className="items-center">
                <a
                  onClick={() => navigate("/admin/addteacher")}
                  href="#pablo"
                  className={
                    "text-xs md:text-sm  py-3 font-light flex items-center " +
                    (location.pathname == "/admin/addteacher"
                      ? "text-blue-500 hover:text-blue-500"
                      : "text-primary hover:text-gray-400")
                  }
                >
                  <UserAddOutlined className="mr-4" />
                  Tambah Guru
                </a>
              </li>
              <li className="items-center">
                <a
                  onClick={() => navigate("/admin/addteacher")}
                  href="#pablo"
                  className={
                    "text-xs md:text-sm  py-3 font-light flex items-center " +
                    (location.pathname == "/admin/addteacher"
                      ? "text-blue-500 hover:text-blue-500"
                      : "text-primary hover:text-gray-400")
                  }
                >
                  <AuditOutlined className="mr-4" />
                  Daftar User
                </a>
              </li>
            </ul>
            <div className="hidden md:inline-block md:absolute bottom-2">
              <hr className="mb-4 md:min-w-full " />
              <p className="text-xs text-center text-gray-400">
                SMKN 1 SUKAMARA
                <br />
                Jalan Tjilik Riwut Km. 5 Sukamara 70235 <br />
                Telpon (0511) 6773031, 6773932 <br />
                email : smkn1sukamara@gmail.com <br />
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
