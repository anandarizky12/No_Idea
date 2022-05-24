import { Steps, Button, message } from "antd";
import React from "react";
import AnswerContent from "./AnswerContent";

const { Step } = Steps;

const AnswerStepByStep = ({ task, steps }: any) => {
  const [current, setCurrent] = React.useState(0);
  const [answer, setAnswer]: any = React.useState({});

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  console.log(steps, "steps");

  return (
    <div className="border p-8 shadow-lg">
      <div>
        <h1 className="text-gray-500 text-2xl text-center">
          Sedang Mengerjakan <strong>{task.title}</strong>
        </h1>
      </div>
      <div>
        <Steps current={current} onChange={(current) => setCurrent(current)}>
          {steps.map((item: any, index: number) => (
            <Step key={item.id} title={`Soal ${index + 1}`} />
          ))}
        </Steps>
        <div style={style.stepsContent}>
          {
            <AnswerContent
              answer={answer}
              setAnswer={setAnswer}
              current={current}
              steps={steps}
            />
          }
        </div>
        <div style={style.stepsAction}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Selanjutnya
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Selesai
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Sebelumnya
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnswerStepByStep;

const style: any = {
  stepsContent: {
    minHeight: "200px",
    marginTop: "2px",
    paddingTop: "40px",
    textAlign: "center",
    backgroundColor: "#fafafa",
    border: "1px dashed #55555",
    borderRadius: "2px",
  },
  stepsAction: {
    marginTop: "24px",
  },
};
