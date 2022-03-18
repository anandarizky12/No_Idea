import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClassroomByTeacherId } from "../actions/classroom";
import { logout } from "../actions/user";
import Class_card from "./Card/Class_card";
function Home() {
  const Dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const classes = useSelector(
    (state: any) => state.getClassroomByTeacherIdReducers
  );
  const Logout = () => {
    Dispatch(logout());
  };

  React.useEffect(() => {
    Dispatch(getClassroomByTeacherId(user.id));
  }, []);

  console.log(classes, user);

  return (
    <div className="p-6 h-full">
      {/* {user.name}
      {user.role} */}
      <div className="font-header  font-semibold text-gray-500">
        Daftar Kelas Anda
      </div>
      <div className="flex w-full h-full flex-wrap">
        <Class_card />
        <Class_card />
        <Class_card />
        <Class_card />
        <Class_card />
        <Class_card />
      </div>

      {/* <button onClick={Logout}>Logout</button> */}
    </div>
  );
}

export default Home;
