import React from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Space,
  DatePicker,
  Select,
} from "antd";
import { useDispatch } from "react-redux";
import { handleChange } from "../../utils/utils";
import moment from "moment";
import axios from "axios";
import { editTask } from "../../actions/task";
import { QuestionEdit } from "./QuestionEdit";
const { Option } = Select;

function EditTask({ setOpen, open, task }: any) {
  const dispatch = useDispatch();
  const onClose = () => {
    setOpen(false);
  };
  const [mapel, setMapel] = React.useState<any>();

  const [state, setState] = React.useState({
    title: task.title,
    description: task.description,
    other: task.other,
    // user_id: id_user,
    deadline: task.deadline,
    // classroom_id: id,
    answer_key: task.answer_key,
    mapel_id: task.mapel_id,
  });
  function onChangeDate(date: any, dateString: String | null): void {
    setState({
      ...state,
      deadline: dateString === "" ? null : dateString,
    });
  }
  const handleSubmit = () => {
    dispatch(editTask(state, task.id));
  };
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/getmapel")
      .then((res) => {
        setMapel(res.data.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);
  const handleSelectClick = (value: string) => {
    setState({ ...state, mapel_id: value });
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
            Edit Tugas
          </Button>
        </Space>
      }
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="title"
              label="Judul Tugas"
              rules={[{ required: true, message: "Please enter Task Name" }]}
            >
              <Input
                placeholder="Masukan Nama Tugas"
                name="title"
                defaultValue={task.title}
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="deadline" label="Batas Waktu">
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
              label="Deskripsi"
              rules={[{ required: true, message: "Please enter Description" }]}
            >
              <Input
                placeholder="Masukan Deskripsi Tugas"
                name="description"
                defaultValue={task.description}
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="other" label="Tambahan">
              <Input
                placeholder="Tambahan"
                name="other"
                defaultValue={task.other}
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="mapel_id" label="Mata Pelajaran">
              <Select
                defaultValue={state.mapel_id}
                style={{ width: 200 }}
                onChange={handleSelectClick}
              >
                {mapel?.map((data: any, key: any) => (
                  <Option value={data.id}>{data.nama}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {task.Questions.length > 0 &&
          task.Questions.map((data: any, index: number) => {
            return (
              <QuestionEdit
                key={index}
                question={data}
                index={index}
                dispatch={dispatch}
              />
            );
          })}
        {/* <Row gutter={16}>
          <Col span={12}>
            <Button
              onClick={() => addQuestion(question, setQuestion)}
              type="primary"
            >
              Tambah Soal
            </Button>
            <Button
              disabled={question.length <= 1 ? true : false}
              onClick={() => deleteQuestion(question, setQuestion)}
              style={{ marginLeft: "20px" }}
            >
              Hapus Soal
            </Button>
          </Col>
          <Questions question={question} />
        </Row> */}
        {/* <Row gutter={16}>
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
        </Row> */}
      </Form>
    </Drawer>
  );
}

export default EditTask;
