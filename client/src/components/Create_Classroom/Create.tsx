import React from "react";
import { Drawer, Form, Button, Col, Row, Input, Space } from "antd";

import { useDispatch } from "react-redux";
import { handleChange } from "../../utils/utils";
import { createClassroom } from "../../actions/classroom";
import { getCookie } from "../../utils/utils";
import useWindowDimension from "../hook/useWindowDimension";

function Create({ setOpenRight, openRight }: any) {
  const dispatch = useDispatch();

  const onClose = () => {
    setOpenRight(false);
  };
  const id = getCookie("id");
  const [state, setState] = React.useState({
    name: "",
    description: "",
    banner: "",
    teacher_id: id,
  });

  const handleSubmit = () => {
    dispatch(createClassroom(state));
  };

  return (
    <Drawer
      title="Buat Kelas baru"
      width={useWindowDimension() > 400 ? 720 : "100%"}
      onClose={onClose}
      visible={openRight}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} type="primary">
            Submit
          </Button>
        </Space>
      }
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Nama"
              rules={[{ required: true, message: "Masukan Nama" }]}
            >
              <Input
                placeholder="Masukan Nama"
                name="name"
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="banner"
              label="Gambar"
              rules={[
                {
                  required: true,
                  message: "Masukan URL Gambar",
                },
              ]}
            >
              <Input
                style={{ width: "100%" }}
                name="banner"
                addonBefore="http://"
                addonAfter=".com"
                onChange={(e) => handleChange(e, state, setState)}
                placeholder="Masukan URL"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Deskripsi"
              rules={[
                {
                  required: true,
                  message: "Masukan Deskripsi",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                name="description"
                onChange={(e) => handleChange(e, state, setState)}
                placeholder="Masukan Deskripsi"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
}

export default Create;
