import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DynamicError from "../404/DynamicError";
import { Spin } from "antd";

import { getDetailScoreStudent } from "../../actions/task";
import EditScoreComponent from "./EditScoreComponent";

function EdtiScore() {
  const dispatch: any = useDispatch();
  const detail = useSelector((state: any) => state.getDetailScoreStudent);
  const { user_id, id, task_id } = useParams();
  const [data, setData]: any = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setData(null);
    setLoading(true);
    dispatch(getDetailScoreStudent(task_id, id, user_id));
  }, [dispatch, user_id, task_id, id]);

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
        <EditScoreComponent data={data} loading={loading} />
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

export default EdtiScore;
