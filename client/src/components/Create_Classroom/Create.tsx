import React from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Space,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../utils/utils";
import { createClassroom } from "../../actions/classroom";
import { getCookie } from "../../utils/utils";
const { Option } = Select;
function Create({ setOpenRight, openRight }: any) {
  const dispatch = useDispatch();
  const createclassroom = useSelector(
    (state: any) => state.createClassroomReducers
  );
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
    console.log(state);

    dispatch(createClassroom(state));
  };

  return (
    <Drawer
      title="Create a new classroom"
      width={720}
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
              label="Name"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input
                placeholder="Please enter user name"
                name="name"
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

export default Create;
