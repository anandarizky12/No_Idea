import React from "react";
import { CopyOutlined } from "@ant-design/icons";
import copy from "copy-to-clipboard";
import { AlertComponents } from "../alert/Alert";
function Classcode({ code }: any) {
  const [Alert, setAlert] = React.useState({
    message: "",
    typeAlert: 0,
  });

  const onCopy = (): void => {
    copy(code);
    setAlert({
      message: "Successfully copied to clipboard",
      typeAlert: 1,
    });
  };

  return (
    <div className="border p-5 border-gray-300 w-48 h-24 rounded-md  flex justify-between">
      <div className="">
        <h1 className="text-md text-gray-600">Class Code</h1>
        <p className="text-2xl font-semibold">{code}</p>
      </div>
      <CopyOutlined onClick={onCopy} className="text-xl" />
      <AlertComponents alert={Alert} setAlert={setAlert} />
    </div>
  );
}

export default Classcode;
