import React from "react";
import { Button, Spin, Modal, Form, Input, Upload, message } from "antd";
import {
  PlusOutlined,
  LoadingOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import { useDispatch } from "react-redux";
import { createMateri } from "../../actions/classroom";
import { useParams } from "react-router-dom";
import { handleChange } from "../../utils/utils";

function Teacher_Materi({ setOpen, open, classroom }: any) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [visible, setVisible] = React.useState(false);
  const [payload, setPayload] = React.useState({
    title: null,
    description: null,
    file: null,
    classroom_id: id,
  });

  const handleSubmit = () => {
    dispatch(createMateri(payload));
  };

  const handleCancel = () => {
    setVisible(false);
  };

  // const uploadFile = async (e: any) => {
  //   const file = e.target.files[0];

  //   try {
  //     const link = URL.createObjectURL(e.target.files[0]);
  //     setFile(link);

  //     const formData = new FormData();
  //     formData.append("file", file);
  //     setLoading(true);

  //     const config = {
  //       headers: {
  //         "content-type": "multipart/form-data",
  //       },
  //     };

  //     const res = await axios.post(
  //       `http://localhost:5000/file/fileupload`,
  //       formData,
  //       config
  //     );
  //     console.log(res.data);
  //     setPayload({ ...payload, file: res.data });
  //     setLoading(false);
  //   } catch (err) {
  //     setLoading(false);
  //     console.log(err);
  //   }
  // };
  const props: UploadProps = {
    name: "file",
    action: "http://localhost:5000/file/fileupload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        setPayload({ ...payload, file: info.file.response });
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="flex flex-row items-center justify-between border-b-2 p-5 border-gray-200 w-4/6">
      <Button
        icon={<PlusOutlined className="text-xl" />}
        size="large"
        type="primary"
        className="hover:cursor-pointer "
        onClick={() => setVisible(!open)}
      >
        Tambah Materi
      </Button>
      <Modal
        title="Tambah Materi"
        visible={visible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        {/* {loading ? (
          <div className="w-full text-center">
            <Spin />
            <p className="mt-2">Mohon Tunggu...</p>
          </div>
        ) : ( */}
        <>
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Please enter Materi Name" }]}
          >
            <Input
              placeholder="Masukan Judul"
              name="title"
              onChange={(e) => handleChange(e, payload, setPayload)}
            />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[{ required: true, message: "Please enter Description" }]}
          >
            <Input.TextArea
              placeholder="Masukan Deskripsi"
              name="description"
              onChange={(e) => handleChange(e, payload, setPayload)}
            />
          </Form.Item>
          <Upload accept=".pdf" maxCount={1} {...props}>
            <Button type="primary" icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>
          <span className="text-xs text-gray-400"> * Jenis File PDF</span>
        </>
        {/* )} */}
      </Modal>
      {classroom ? (
        <h1 className="text-gray-500 text-base font-normal">
          {classroom.data.name}
        </h1>
      ) : (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
    </div>
  );
}

export default Teacher_Materi;
