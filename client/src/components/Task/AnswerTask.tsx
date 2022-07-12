import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../actions/task";
import DynamicError from "../404/DynamicError";
import { Spin } from "antd";
import { getCookie } from "../../utils/utils";
import AnswerStepByStep from "./AnswerStepByStep";
import ResultAnswer from "./ResultAnswer";
import moment from "moment";
import { LockOutlined } from "@ant-design/icons";
function AnswerTask() {
  const Dispatch = useDispatch();
  const task = useSelector((state: any) => state.getTask);
  const { id, class_id } = useParams();
  const user_id = getCookie("id");
  const [data, setData]: any = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [alreadyAnswered, setAlreadyAnswered] = React.useState(false);

  React.useEffect(() => {
    Dispatch(getTask(id, class_id));
  }, []);

  React.useEffect(() => {
    if (task && task.task) {
      setData(task.task.data);
      setLoading(false);
      if (
        task.task.data.Questions.length > 0 &&
        task.task.data.Questions[0].Answer_task
      ) {
        setAlreadyAnswered(true);
      } else {
        setAlreadyAnswered(false);
      }
    } else {
      setLoading(true);
    }
  }, [task]);

  const isDeadline =
    moment(data?.deadline).format() <
    moment(new Date().toLocaleString()).format();

  if (task.error && task.error.data) {
    return (
      <DynamicError
        status={task.error.data.status}
        message={task.error.data.message}
      />
    );
  }

  if (data && isDeadline && !alreadyAnswered) {
    return (
      <div
        style={{ height: "90vh" }}
        className="flex flex-col items-center justify-center"
      >
        <LockOutlined style={{ fontSize: "17rem", color: "gray" }} />
        <p className="text-2xl text-gray-400">
          Batas Pengerjaan Tugas Sudah Lewat
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <>
        {alreadyAnswered ? (
          <ResultAnswer data={data} />
        ) : (
          <div className="w-5/6 px-8 m-8">
            {!loading ? (
              <AnswerStepByStep
                Dispatch={Dispatch}
                task={data}
                steps={data.Questions}
                id={id}
                class_id={class_id}
                user_id={user_id}
              />
            ) : (
              <div className="flex flex-col items-center justify-center w-full  m-5">
                <Spin />
              </div>
            )}
          </div>
        )}
      </>
    </div>
  );
}

export default AnswerTask;
