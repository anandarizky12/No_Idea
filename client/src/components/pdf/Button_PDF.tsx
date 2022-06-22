import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import ReactToPrint from "react-to-print";

function ButtonPrint({ componentRef }: any) {
  return (
    <ReactToPrint
      documentTitle="Cetak Laporan"
      trigger={() => (
        <button className="bg-green-500 p-2 md:w-45 text-gray-100 font-semibold rounded-sm flex items-center justify-center">
          <DownloadOutlined className="lg:mr-2" />{" "}
          <span className="hidden lg:inline-block">Cetak Data</span>
        </button>
      )}
      content={() => componentRef.current}
    />
  );
}

export default ButtonPrint;
