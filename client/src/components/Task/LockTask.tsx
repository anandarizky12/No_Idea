import { LockOutlined } from "@ant-design/icons";

interface IProps {
  message: string;
}
const LockTask = ({ message }: IProps) => {
  return (
    <div
      style={{ height: "90vh" }}
      className="flex flex-col items-center justify-center"
    >
      <LockOutlined style={{ fontSize: "17rem", color: "gray" }} />
      <p className="text-2xl text-gray-400">{message}</p>
    </div>
  );
};

export default LockTask;
