import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PopupProfile from "./PopupProfile";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.admin_login);
  console.log(user);
  return (
    <div className="">
      <nav className="bg-white shadow-lg fixed hidden md:flex h-14 top-0 left-0 w-full z-10  md:flex-row md:flex-nowrap  md:justify-start  items-center p-4">
        <div className="w-full mx-auto  items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <div className="flex items-center">
            <img src={"/logo.png"} width={32} />
            <a
              className="text-gray-500 ml-2 text-sm uppercase hidden md:inline-block font-semibold "
              onClick={(e) => navigate("/admin")}
            >
              SMKN 1 SUKAMARA
            </a>
          </div>
          <div className="flex items-center justify-center">
            <ul className="flex items-center p-0 m-0 mr-12 text-gray-500">
              <li className="mr-4">
                <a className="text-gray-500" href="#user_table">
                  Daftar Pengguna
                </a>
              </li>
              <li>
                <a className="text-gray-500" href="#scores_table">
                  Daftar Seluruh Nilai
                </a>
              </li>
            </ul>

            <ul className="flex-col md:flex-row p-0 m-0 list-none items-center justify-center  hidden md:flex hover:cursor-pointer">
              <PopupProfile user={user} />
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </div>
  );
}
