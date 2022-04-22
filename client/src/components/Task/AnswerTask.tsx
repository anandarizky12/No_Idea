import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../actions/task";
import DynamicError from "../404/DynamicError";
import { Button, Spin } from "antd";
import moment from "moment";
import { Input } from "antd";

const { TextArea } = Input;

function AnswerTask() {
  const Dispatch = useDispatch();
  const task = useSelector((state: any) => state.getTask);
  const { id, class_id } = useParams();
  const [answer, setAnswer] = React.useState("");

  React.useEffect(() => {
    Dispatch(getTask(id, class_id));
  }, []);

  if (task.error && task.error.data) {
    return (
      <DynamicError
        status={task.error.data.status}
        message={task.error.data.message}
      />
    );
  }
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="border border-gray-300 rounded-md shadow-md  w-4/6 flex items-center p-8 justify-between m-8">
        {task.task && task.task.data ? (
          <div className="flex flex-col w-full">
            <div className="flex flex-col justify-center w-full ">
              <h1 className="text-2xl font-normal text-gray-700">
                {task.task.data.title}
              </h1>
              <h3 className="text-gray-400 text-xs font-light">
                {"Dibuat pada " +
                  moment(task.task.data.createdAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
              </h3>
              <h3 className="text-gray-600 font-light mt-2">
                {task.task.data.description}
              </h3>
            </div>
            <div className="w-full mt-5">
              <h1>Jawaban Anda</h1>

              <TextArea
                onChange={(e) => setAnswer(e.target.value)}
                style={{ width: "100%" }}
                rows={4}
              />
            </div>
            <div className="flex justify-end">
              {" "}
              <Button
                disabled={answer.length < 1 ? true : false}
                type="primary"
                className="mt-5"
                style={{ width: 90 }}
              >
                Kirim
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full  m-5">
            <Spin />
          </div>
        )}
      </div>
    </div>
  );
}

export default AnswerTask;
