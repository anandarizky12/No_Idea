import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DynamicError from "../404/DynamicError";
import { Spin } from "antd";
import ResultAnswerStudent from "./ResultAnswerStudent";
import { getDetailScoreStudent } from "../../actions/task";

function ScoreDetail() {
  const Dispatch = useDispatch();
  const detail = useSelector((state: any) => state.getDetailScoreStudent);
  const { user_id, id, task_id } = useParams();
  const [data, setData]: any = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    Dispatch(getDetailScoreStudent(task_id, id, user_id));
  }, []);

  React.useEffect(() => {
    if (detail && detail.task) {
      setData(detail.task.data);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [detail]);

  if (detail.error && detail.error.data) {
    return (
      <DynamicError
        status={detail.error.data.status}
        message={detail.error.data.message}
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {!loading ? (
        <ResultAnswerStudent data={data} />
      ) : (
        <div
          style={{ height: "90vh" }}
          className="flex items-center justify-center"
        >
          <Spin size="large" />
        </div>
      )}
    </div>
  );
}

export default ScoreDetail;
