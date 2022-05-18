import { Steps, Button, message } from "antd";
import React from "react";
import { handleChangeAnswer } from "../../utils/utils";

const { Step } = Steps;

const AnswerStepByStep = ({ steps }: any) => {
  const [current, setCurrent] = React.useState(0);
  const [answer, setAnswer]: any = React.useState({});
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  console.log(answer);

  return (
    <>
      <Steps current={current} onChange={(current) => setCurrent(current)}>
        {steps.map((item: any, index: number) => (
          <Step key={item.id} title={`Soal ${index + 1}`} />
        ))}
      </Steps>
      <div style={style.stepsContent}>
        {
          //   <>
          //   steps[current].content
          //   </>
          <input
            name={`answer${current}`}
            // value={answer.length > 0 ? answer[current][`answer${current}`] : ""}
            onChange={(e) => handleChangeAnswer(e, answer, current, setAnswer)}
          />
        }
      </div>
      <div style={style.stepsAction}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default AnswerStepByStep;

const style: any = {
  stepsContent: {
    minHeight: "200px",
    marginTop: "16px",
    paddingTop: "80px",
    textAlign: "center",
    backgroundColor: "#fafafa",
    border: "1px dashed #e9e9e9",
    borderRadius: "2px",
  },
  stepsAction: {
    marginTop: "24px",
  },
};
