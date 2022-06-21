import React from "react";
import { Button, Spin, Modal, Form, Input } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import axios from "axios";

function Teacher_Materi({ setOpen, open, classroom }: any) {
  const [loading, setLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [file, setFile] = React.useState<any>(null);
  const [payload, setPayload] = React.useState({
    title: null,
    description: null,
    file: null,
    classroom_id: classroom.id,
  });

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];

    try {
      const link = URL.createObjectURL(e.target.files[0]);
      setFile(link);

      const formData = new FormData();
      formData.append("image", file);
      setLoading(true);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const res = await axios.post(
        `"http://localhost:5000/api/upload`,
        formData,
        config
      );

      setPayload({ ...payload, file: res.data });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
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
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Please enter Materi Name" }]}
        >
          <Input
            placeholder="Masukan Judul"
            name="title"

            // onChange={(e) => handleChange(e, state, setState)}
          />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[{ required: true, message: "Please enter Description" }]}
        >
          <Input.TextArea
            placeholder="Masukan Deskripsi"
            name="description"
            // onChange={(e) => handleChange(e, state, setState)}
          />
        </Form.Item>
        <Input type="file" name="file" />
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
