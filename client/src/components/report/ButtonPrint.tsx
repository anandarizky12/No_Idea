// import { ButtonPrint } from "@ant-design/icons";
import ReactToPrint from "react-to-print";
import { useState } from "react";
import { Button } from "antd";
function ButtonPrint({ id, componentRef }: any) {
  const [loading, setLoading] = useState(false);

  return (
    <ReactToPrint
      documentTitle="Cetak Laporan"
      trigger={() => (
        <Button
          size={"small"}
          className="my-2 ml-6"
          disabled={!id}
          type={"primary"}
        >
          {/* <ButtonPrint className="lg:mr-2" />{" "} */}
          <span className=" lg:inline-block">Cetak Data</span>
        </Button>
      )}
      content={() => componentRef.current}
    />
  );
}

export default ButtonPrint;
