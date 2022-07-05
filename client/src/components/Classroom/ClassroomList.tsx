import { Spin } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClassroomByTeacherId } from "../../actions/classroom";
import DynamicError from "../404/DynamicError";
import ClassroomListTable from "./ClassroomListTable";

function ClassroomList() {
  const dispatch = useDispatch();
  const classes = useSelector(
    (state: any) => state.getClassroomByTeacherIdReducers
  );
  const { classroom } = classes;
  const user = useSelector((state: any) => state.user);

  React.useEffect(() => {
    dispatch(getClassroomByTeacherId(user.id));
  }, []);
  console.log(classroom);

  if (!classes.isLoading && classes.isError && classes.error)
    return (
      <DynamicError
        status={classes?.error?.status}
        message={classes?.error?.classes?.message}
      />
    );

  return (
    <div className="flex flex-col items-center  w-full h-5/6">
      <div className="w-full flex flex-col items-center">
        {classes && classroom ? (
          <ClassroomListTable
            // materi={classroom.materi}
            // task={classroom.task}
            // students={classroom.student_in_class}
            data={classroom}
          />
        ) : (
          <Spin />
        )}
      </div>
    </div>
  );
}

export default ClassroomList;
