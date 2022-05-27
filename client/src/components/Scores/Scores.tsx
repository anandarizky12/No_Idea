import { Image } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ScoreTable from "./ScoreTable";
import { getAllScores } from "../../actions/task";
import DynamicError from "../404/DynamicError";
import { useParams } from "react-router-dom";

function Scores() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const scores = useSelector((state: any) => state.getAllScores);

  React.useEffect(() => {
    dispatch(getAllScores(id));
  }, []);

  if (scores.error) {
    return (
      <DynamicError
        message={scores.error.data.message}
        status={scores.error.data.status}
      />
    );
  }
  return (
    <div className="flex flex-col items-center  w-full h-5/6">
      <div className="w-full flex flex-col items-center">
        {scores && <ScoreTable scores={scores.scores} id={id} />}
      </div>
    </div>
  );
}

export default Scores;
