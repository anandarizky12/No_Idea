import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/user";
import Class_card from "./Card/Class_card";
function Home() {
  const Dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  const Logout = () => {
    Dispatch(logout());
  };
  return (
    <div className="p-6">
      {/* {user.name}
      {user.role} */}
      <div className="font-header  font-semibold text-gray-500">
        Daftar Kelas Anda
      </div>
      <Class_card />
      {/* <button onClick={Logout}>Logout</button> */}
    </div>
  );
}

export default Home;
