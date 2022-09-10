import { Spin } from "antd";

const LoadingPage: React.FunctionComponent = () => {
  return (
    <div
      className={
        "flex items-center justify-center w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-white  z-50"
      }
    >
      <Spin size="large" className="w-24 h-24 text-primary-5" />
    </div>
  );
};

export default LoadingPage;
