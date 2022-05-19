import React from "react";
import { handleChangeAnswer } from "../../utils/utils";
import { Input } from "antd";

interface IAnswer {
  answer: [];
  current: number;
  setAnswer: any;
  steps: any;
}
function AnswerContent({ answer, current, setAnswer, steps }: IAnswer) {
  return (
    <div>
      <h1 className="text-gray-500 text-lg text-left">
        {steps[current].question}
      </h1>
      <Input.TextArea
        name={`answer${current}`}
        defaultValue={
          answer[current] ? answer[current][`answer${current}`] : ""
        }
        value={answer[current] ? answer[current][`answer${current}`] : ""}
        onChange={(e) =>
          handleChangeAnswer(e, answer, current, setAnswer, steps)
        }
        style={{ width: "100%", marginTop: "10px" }}
        rows={4}
        placeholder="Enter Answer"
      />
    </div>
  );
}

export default AnswerContent;
