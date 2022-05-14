import React from "react";
import Classcode from "./Classcode";
import CreateTaskButton from "./CreateTaskButton";
import { useSelector, useDispatch } from "react-redux";
import { getTaskInClassroom } from "../../actions/task";
import TaskCard from "../Task/TaskCard";

function Teacher({ classroom, user }: any) {
  const id = classroom.data.id;
  const dispatch = useDispatch();
  const taskData = useSelector((state: any) => state.getTaskInClassroom);
  const { task } = taskData;

  React.useEffect(() => {
    dispatch(getTaskInClassroom(id));
  }, [id]);

  return (
    <div className="w-full w-3/4 ">
      <div className="flex my-5 w-full">
        {/* left team */}
        <div className="">
          {" "}
          <Classcode code={classroom.data.classcode} />
        </div>
        {/* right team */}
        <div className="w-full">
          <CreateTaskButton teacher={classroom.data.User} />
        </div>
      </div>
      <div className="">
        {task && task.data.length > 0
          ? task.data.map((task: any, number: Number) => {
              return (
                <div className="flex ">
                  <TaskCard key={number} task={task} user={user} />;
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Teacher;
