import { Alert } from "antd";

export const AlertComponents = (alert: any) => {
  console.log(alert.alert.typeAlert);
  return (
    <div style={{ position: "absolute", top: 5, right: 5 }}>
      {/* <Alert description={message}"Success Tips" type="success" showIcon />
      <Alert description={message}"Informational Notes" type="info" showIcon />
      <Alert description={message}"Warning" type="warning" showIcon closable />
      <Alert description={message}"Error" type="error" showIcon /> */}
      {alert.alert.typeAlert == 1 && (
        <Alert
          description={alert.alert.message}
          message="Success"
          type="success"
          showIcon
        />
      )}
      {alert.alert.typeAlert == 2 && (
        <Alert
          description={alert.alert.message}
          message="Info"
          type="info"
          showIcon
        />
      )}
      {alert.alert.typeAlert == 3 && (
        <Alert
          description={alert.alert.message}
          message="Warning"
          type="warning"
          showIcon
          closable
        />
      )}
      {alert.alert.typeAlert == 4 && (
        <Alert
          description={alert.alert.message}
          message="Error"
          type="error"
          showIcon
        />
      )}
    </div>
  );
};
