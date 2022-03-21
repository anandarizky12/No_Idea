import React from "react";
import { Drawer, Form, Button, Col, Row, Input } from "antd";
import { useDispatch } from "react-redux";
import { handleChange } from "../../utils/utils";
import { editClassroom, getClassroom } from "../../actions/classroom";

import { Space } from "antd";
function Edit({ setOpenEdit, open, id, classroom }: any) {
  const dispatch = useDispatch();

  const onClose = () => {
    setOpenEdit(false);
  };
  React.useEffect(() => {
    dispatch(getClassroom(id));
  }, [id]);

  const [state, setState] = React.useState({
    name: classroom.name,
    description: classroom.description,
    banner: classroom.banner,
    id: id,
  });

  const handleSubmit = () => {
    dispatch(editClassroom(state));
  };

  return (
    <Drawer
      title="Edit classroom"
      width={720}
      onClose={onClose}
      visible={open}
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
              label="Name"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input
                placeholder="Please enter user name"
                name="name"
                defaultValue={state.name}
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="banner"
              label="Image Banner"
              rules={[
                { required: true, message: "Please enter image banner url" },
              ]}
            >
              <Input
                style={{ width: "100%" }}
                name="banner"
                defaultValue={state.banner}
                addonBefore="http://"
                addonAfter=".com"
                onChange={(e) => handleChange(e, state, setState)}
                placeholder="Please enter url"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "please enter url description",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                defaultValue={state.description}
                name="description"
                onChange={(e) => handleChange(e, state, setState)}
                placeholder="please enter url description"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
}

export default Edit;
