import { Steps, Button, message } from "antd";
import React from "react";
import { AnswerTask } from "../../actions/task";
import { timer } from "../../utils/utils";
import { useCallbackPrompt } from "../hook/useCallbackPrompt";
import AnswerContent from "./AnswerContent";
import DialogBox from "./Dialog/Dialog";
import { ClockCircleOutlined } from "@ant-design/icons";
const { Step } = Steps;

interface AnswerTaskProps {
  task: any;
  steps: any;
  Dispatch: any;
  id: string | undefined;
  class_id: string | undefined;
  user_id: string | undefined;
}
const AnswerStepByStep = ({
  task,
  steps,
  Dispatch,
  id,
  class_id,
  user_id,
}: AnswerTaskProps) => {
  const [current, setCurrent] = React.useState(0);
  const [answer, setAnswer]: any = React.useState({});

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const [showDialog, setShowDialog] = React.useState(false);
  const [showPrompt, confirmNavigation, cancelNavigation] =
    useCallbackPrompt(showDialog);

  const sendAnswer = () => {
    // const loading = message.loading("Action in progress..", 0);
    for (let x in task.Questions) {
      console.log(answer?.[x]?.[`answer${x}`]);
      if (!answer?.[x]?.[`answer${x}`]) {
        message.error("Please answer all questions");

        return;
      }
    }

    message.success("Answer has been sent");
    Dispatch(AnswerTask({ answer, id, class_id, user_id }));
  };

  const [timerstate, setTimer] = React.useState<any>(timer(task.deadline));
  React.useEffect(() => {
    setTimer(timer(task.deadline));
  }, [task]);
  setInterval(() => {
    setTimer(timer(task.deadline));
  }, 60000);

  return (
    <div className="border p-8 shadow-lg">
      <DialogBox
        showDialog={showPrompt}
        confirmNavigation={confirmNavigation}
        cancelNavigation={cancelNavigation}
      />
      <div>
        <h1 className="text-right text-2xl  text-primary">
          {" "}
          <ClockCircleOutlined /> {timerstate}
        </h1>

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
              setShowDialog={setShowDialog}
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
            <Button type="primary" onClick={sendAnswer}>
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
