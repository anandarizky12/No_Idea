import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import ReactToPrint from "react-to-print";
import { Button } from "antd";

function ButtonPrint({ componentRef }: any) {
  return (
    <ReactToPrint
      documentTitle="Cetak Laporan"
      trigger={() => (
        <Button type="primary" icon={<DownloadOutlined />}>
          <span className="hidden lg:inline-block">Cetak Data</span>
        </Button>
      )}
      content={() => componentRef.current}
    />
  );
}

export default ButtonPrint;
