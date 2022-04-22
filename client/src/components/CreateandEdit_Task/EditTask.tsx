import React from "react";
import { Drawer, Form, Button, Col, Row, Input, Space, DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { handleChange } from "../../utils/utils";
import moment from "moment";
import { getCookie } from "../../utils/utils";
import { useParams } from "react-router-dom";
import { editTask } from "../../actions/task";

function EditTask({ setOpen, open, task }: any) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const onClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    title: task.title,
    description: task.description,
    other: task.other,
    // user_id: id_user,
    deadline: task.deadline,
    // classroom_id: id,
    answer_key: task.answer_key,
  });
  function onChangeDate(date: any, dateString: any): void {
    setState({
      ...state,
      deadline: dateString,
    });
  }
  const handleSubmit = () => {
    dispatch(editTask(state, task.id));
  };
  return (
    <Drawer
      title="Edit Task"
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
              name="title"
              label="Name"
              rules={[{ required: true, message: "Please enter Task Name" }]}
            >
              <Input
                placeholder="Enter Task Name"
                name="title"
                defaultValue={task.title}
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="deadline"
              label="Pick Deadline"
              rules={[{ required: true, message: "Please select Deadline" }]}
            >
              <DatePicker
                defaultValue={task.deadline && moment(task.deadline)}
                name="deadline"
                onChange={onChangeDate}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: "Please enter Description" }]}
            >
              <Input
                placeholder="Enter Description"
                name="description"
                defaultValue={task.description}
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="other" label="Other">
              <Input
                placeholder="Other"
                name="other"
                defaultValue={task.other}
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="answer_key"
              label="Kunci Jawaban"
              rules={[
                {
                  required: true,
                  message: "Please enter the answer key",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                defaultValue={task.answer_key}
                name="answer_key"
                onChange={(e) => handleChange(e, state, setState)}
                placeholder="Please enter the answer key"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
}

export default EditTask;
