import React from "react";
import { Button, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { NONAME } from "dns";
import * as XLSX from "xlsx";
interface IProps {
  setExcelData: any;
  excelData: any;
}
const ExcelImport = ({ excelData, setExcelData }: IProps) => {
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
        console.log("plz select your file");
      }

      //   if (info.file.status !== "uploading") {
      //     console.log(info.file, info.fileList);
      //   }
      //   if (info.file.status === "done") {
      //     message.success(`${info.file.name} file uploaded successfully`);
      //   } else if (info.file.status === "error") {
      //     message.error(`${info.file.name} file upload failed.`);
      //   }
    },
  };

  //   const handleFile = (e: any) => {
  //     let selectedFile = e.target.files[0];

  //     if (selectedFile) {
  //       if (selectedFile) {
  //         let reader = new FileReader();
  //         reader.readAsArrayBuffer(selectedFile);
  //         reader.onload = (e: any) => {
  //           console.log(e.target.result);
  //           setExcelFile(e.target.result);
  //         };
  //       } else {
  //         setExcelFile(null);
  //       }
  //     } else {
  //       console.log("plz select your file");
  //     }
  //   };

  // submit function
  //   const handleSubmit = (e: any) => {
  //     e.preventDefault();
  //     if (excelFile !== null) {
  //       const workbook = XLSX.read(excelFile, { type: "buffer" });
  //       const worksheetName = workbook.SheetNames[0];
  //       const worksheet = workbook.Sheets[worksheetName];
  //       const data = XLSX.utils.sheet_to_json(worksheet);
  //       setExcelData(data);
  //     } else {
  //       setExcelData(null);
  //     }
  //   };

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
