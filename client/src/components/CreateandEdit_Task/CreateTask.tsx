import React from "react";
import { Drawer, Form, Button, Col, Row, Input, Space, DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { handleChange } from "../../utils/utils";
import { createTask } from "../../actions/task";
import { getCookie } from "../../utils/utils";
import { useParams } from "react-router-dom";
import Questions from "./Questions";

function CreateTask({ setOpen, open }: any) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const onClose = () => {
    setOpen(false);
  };
  const id_user = getCookie("id");
  const [question, setQuestion] = React.useState([
    {
      no: 1,
      question_0: null,
      answer_key_0: null,
    },
  ]);
  const [state, setState] = React.useState({
    title: null,
    description: null,
    other: null,
    user_id: id_user,
    deadline: null,
    classroom_id: id,
  });
  function onChangeDate(date: any, dateString: any): void {
    setState({
      ...state,
      deadline: dateString,
    });
  }
  const handleSubmit = () => {
    dispatch(createTask(state, question));
  };

  const addQuestion = () => {
    if (question.length >= 10) {
      alert("Jumlah Soal Maksimal 10");
      return;
    }
    const newQuestion: any = [...question];
    newQuestion.push({
      no: newQuestion.length + 1,
    });
    setQuestion(newQuestion);
  };

  const deleteQuestion = () => {
    if (question.length <= 1) {
      alert("Jumlah Soal Minimal 1");
      return;
    }
    const newQuestion: any = [...question];
    newQuestion.pop();
    setQuestion(newQuestion);
  };

  return (
    <Drawer
      title="Create a new Task"
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
              label="Nama Tugas"
              rules={[{ required: true, message: "Please enter Task Name" }]}
            >
              <Input
                placeholder="Enter Task Name"
                name="title"
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
              <DatePicker name="deadline" onChange={onChangeDate} />
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
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="other" label="Other">
              <Input
                placeholder="Lainnya"
                name="other"
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>
        </Row>

        {question.map((data, index) => {
          return (
            <Questions
              key={index}
              index={index}
              data={data}
              question={question}
            />
          );
        })}
        <Row gutter={16}>
          <Col span={12}>
            <Button onClick={addQuestion} type="primary">
              Tambah Soal
            </Button>
            <Button
              disabled={question.length <= 1 ? true : false}
              onClick={deleteQuestion}
              style={{ marginLeft: "20px" }}
            >
              Hapus Soal
            </Button>
          </Col>
          {/* <Questions question={question} /> */}
        </Row>
      </Form>
    </Drawer>
  );
}

export default CreateTask;
