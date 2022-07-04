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
    <div className="border p-5 border-gray-300 rounded-md  flex justify-between  w-full  md:w-48 h-24 ">
      <div>
        <h1 className="text-md text-primary">Kode Kelas</h1>
        <p className="text-2xl font-semibold">{code}</p>
      </div>
      <CopyOutlined onClick={onCopy} className="text-xl" />
      <AlertComponents alert={Alert} setAlert={setAlert} />
    </div>
  );
}

export default Classcode;
