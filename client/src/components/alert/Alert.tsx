import { Alert } from "antd";

interface IProps {
  alert: {
    message: string;
    typeAlert: string | number;
  };

  setAlert: any;
}
export const AlertComponents = ({ alert, setAlert }: IProps) => {
  console.log(alert);
  const onClose = (): void => {
    setAlert({
      message: "",
      typeAlert: 0,
    });
  };

  return (
    <div style={{ position: "fixed", top: 5, right: 5, zIndex: 100 }}>
      {alert.typeAlert == 1 && (
        <Alert
          description={alert.message}
          message="Success"
          type="success"
          showIcon
          closable
          onClose={onClose}
        />
      )}
      {alert.typeAlert == 2 && (
        <Alert
          description={alert.message}
          message="Info"
          type="info"
          showIcon
          closable
          onClose={onClose}
        />
      )}
      {alert.typeAlert == 3 && (
        <Alert
          description={alert.message}
          message="Warning"
          type="warning"
          showIcon
          closable
          onClose={onClose}
        />
      )}
      {alert.typeAlert == 4 && (
        <Alert
          description={alert.message}
          message="Error"
          type="error"
          showIcon
          closable
          onClose={onClose}
        />
      )}
    </div>
  );
};
