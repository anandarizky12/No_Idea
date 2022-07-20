import React from "react";
import { Button, Input, InputNumber, Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { editScore } from "../../actions/task";

function EachScore({ data, item }: any) {
  const dispatch = useDispatch();

  const [score, setScore] = React.useState(item.Answer_task.Score.score);

  const onChange = (value: number) => {
    setScore(value);
  };

  console.log(data);
  const handleSubmit = () => {
    return dispatch(
      editScore(
        score,
        data.classroom_id,
        item.task_id,
        item.Answer_task.Score.id,
        item.Answer_task.User.id
      )
    );
  };

  return (
    <div className="mt-3">
      <Input.Group compact>
        <InputNumber
          style={{ width: "87%" }}
          type="number"
          name="score"
          value={score}
          onChange={onChange}
          max={100 / data.Questions.length}
          min={0}
          //   defaultValue={item.Answer_task.Score.score}
        />
        <Tooltip title="Ubah Nilai">
          <Button onClick={handleSubmit} type="primary">
            Simpan
          </Button>
        </Tooltip>
      </Input.Group>
    </div>
  );
}

export default EachScore;
