import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/user";
function Home() {
  const Dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  const Logout = () => {
    Dispatch(logout());
  };
  return (
    <div>
      {user.name}
      {user.role}
      <button onClick={Logout}>Logout</button>
    </div>
  );
}

export default Home;
