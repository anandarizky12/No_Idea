import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PopupProfile from "./PopupProfile";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.admin_login);
  console.log(user);
  return (
    <div>
      <nav className="hidden md:flex h-14 top-0 left-0 w-full z-10  md:flex-row md:flex-nowrap  md:justify-start  items-center p-4 shadow-sm">
        <div className="w-full mx-auto  items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
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
          <ul>
            <li>Daftar Pengguna</li>
            <li>Daftar Seluruh Nilai</li>
          </ul>

          <ul className="flex-col md:flex-row p-0 m-0 list-none items-center justify-center  hidden md:flex hover:cursor-pointer">
            <PopupProfile user={user} />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </div>
  );
}
