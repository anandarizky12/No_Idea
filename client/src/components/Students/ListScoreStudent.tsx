import { Spin } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getYourScore } from "../../actions/classroom";
import DynamicError from "../404/DynamicError";
import ListScoreTable from "./ListScoreTable";

function ListScoreStudent() {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.getYourScore);

  React.useEffect(() => {
    dispatch(getYourScore());
  }, []);

  console.log(data);

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
        {data ? <ListScoreTable data={data} /> : <Spin />}
      </div>
    </div>
  );
}

export default ListScoreStudent;
