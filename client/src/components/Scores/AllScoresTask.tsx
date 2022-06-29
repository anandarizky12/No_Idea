import { Spin } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getAllTasksScore } from "../../actions/task";
import DynamicError from "../404/DynamicError";
import AllScoreTaskTable from "./AllScoreTaskTable";

// import ListScoreTable from "./ListScoreTable";

function AllScoresTask() {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.getAllTaskScore);
  const { task_id } = useParams();
  React.useEffect(() => {
    dispatch(getAllTasksScore(task_id));
  }, []);
  if (!data.isLoading && data.isError && data.error)
    return (
      <DynamicError
        status={data?.error?.status}
        message={data?.error?.data?.message}
      />
    );

  return (
    <div className="flex flex-col items-center  w-full h-5/6">
      <div className="w-full flex flex-col items-center">
        {data ? <AllScoreTaskTable data={data} id={task_id} /> : <Spin />}
      </div>
    </div>
  );
}

export default AllScoresTask;
