import { Alert } from "antd";

interface IProps {
  alert: {
    message: string;
    typeAlert: string | number;
  };
}
export const AlertComponents = ({ alert }: IProps) => {
  return (
    <div style={{ position: "absolute", top: 5, right: 5 }}>
      {alert.typeAlert == 1 && (
        <Alert
          description={alert.message}
          message="Success"
          type="success"
          showIcon
        />
      )}
      {alert.typeAlert == 2 && (
        <Alert
          description={alert.message}
          message="Info"
          type="info"
          showIcon
        />
      )}
      {alert.typeAlert == 3 && (
        <Alert
          description={alert.message}
          message="Warning"
          type="warning"
          showIcon
          closable
        />
      )}
      {alert.typeAlert == 4 && (
        <Alert
          description={alert.message}
          message="Error"
          type="error"
          showIcon
        />
      )}
    </div>
  );
};
