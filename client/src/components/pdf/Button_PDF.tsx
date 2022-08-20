import { DownloadOutlined } from "@ant-design/icons";
import ReactToPrint from "react-to-print";
import { Button } from "antd";

function ButtonPrint({ componentRef, type, size }: any) {
  return (
    <ReactToPrint
      documentTitle="Cetak Laporan"
      trigger={() => (
        <Button
          size={size ? size : null}
          type={type ? type : "primary"}
          icon={<DownloadOutlined />}
        >
          <span className="hidden lg:inline-block">Cetak Data</span>
        </Button>
      )}
      content={() => componentRef.current}
    />
  );
}

export default ButtonPrint;
