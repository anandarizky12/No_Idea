import React from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import * as XLSX from "xlsx";
interface IProps {
  setExcelData: any;
}
const ExcelImport = ({ setExcelData }: IProps) => {
  const [excelFile, setExcelFile] = React.useState(null);
  const props: any = {
    onChange(info: any) {
      //   console.log(info.file);

      if (info.file.originFileObj) {
        if (info.file.originFileObj) {
          let reader = new FileReader();
          reader.readAsArrayBuffer(info.file.originFileObj);
          reader.onload = (e: any) => {
            setExcelFile(e.target.result);
          };
        } else {
          setExcelFile(null);
        }
      } else {
        alert("plz select your file");
      }
    },
  };

  React.useEffect(() => {
    if (excelFile) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    }
    //eslint-disable-next-line
  }, [excelFile]);

  return (
    <div>
      <Upload
        {...props}
        accept=".xlss,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        status="success"
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>{" "}
        <p className="text-xs text-gray-400">* Format (xlss / excel)</p>
      </Upload>
    </div>
  );
};
export default ExcelImport;
