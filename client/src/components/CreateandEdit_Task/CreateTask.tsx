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
import { handleChange, addQuestion, deleteQuestion } from "../../utils/utils";
import { createTask } from "../../actions/task";
import { getCookie } from "../../utils/utils";
import { useParams } from "react-router-dom";
import Questions from "./Questions";
import axios from "axios";
import { AlertComponents } from "../alert/Alert";
import { Moment } from "moment";
const { Option } = Select;

interface IState {
  title: string;
  description: string;
  other: string;
  user_id: string | undefined;
  deadline: Moment | undefined;
  timetable: Moment | undefined;
  classroom_id: string | undefined;
  mapel_id: string | null | undefined;
}
function CreateTask({ setOpen, open }: any) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [form] = Form.useForm();
  const [mapel, setMapel] = React.useState<any>();
  const [alert, setAlert] = React.useState({
    message: "",
    typeAlert: 0,
  });
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

  const [state, setState] = React.useState<IState>({
    title: "",
    description: "",
    other: "",
    user_id: id_user,
    deadline: undefined,
    timetable: undefined,
    classroom_id: id,
    mapel_id: undefined,
  });

  function onChangeDate(date: any, dateString: any): void {
    setState({
      ...state,
      deadline: dateString,
    });
  }
  function onChangeDateTimetable(date: any, dateString: any): void {
    setState({
      ...state,
      timetable: dateString,
    });
  }

  const handleSubmit = () => {
    dispatch(
      createTask(state, question, id, setAlert, setState, setQuestion, form)
    );
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
  console.log(state);
  return (
    <Drawer
      title="Buat Tugas Baru"
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
      <Form
        layout="vertical"
        hideRequiredMark
        form={form}
        onFinish={handleSubmit}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="title"
              label="Nama Tugas"
              rules={[{ required: true, message: "Pilih Task Name" }]}
            >
              <Input
                placeholder="Enter Task Name"
                name="title"
                value={state.title}
                autoComplete="off"
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="deadline"
              label="Batas Pengerjaan"
              rules={[{ required: true, message: "Please select Deadline" }]}
            >
              <DatePicker
                value={state.deadline}
                name="deadline"
                onChange={onChangeDateTimetable}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="timetable"
              label="Penjadwalan"
              rules={[
                {
                  required: true,
                  message: "Please select Please Select Timetable",
                },
              ]}
            >
              <DatePicker
                name="timetable"
                value={state.timetable}
                onChange={onChangeDate}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Deskripsi Tugas"
              rules={[{ required: true, message: "Pilih Description" }]}
            >
              <Input
                placeholder="Masukan Deskripsi Tugas"
                name="description"
                value={state.description}
                autoComplete="off"
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="other" label="Tambahan">
              <Input
                placeholder="Lainnya"
                name="other"
                value={state.other}
                autoComplete="off"
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="mapel_id"
              label="Mata Pelajaran"
              rules={[{ required: true, message: "Pilih Mata Pelajaran" }]}
            >
              <Select
                placeholder={"Pilih Mapel"}
                style={{ width: 200 }}
                onChange={handleSelectClick}
                // value={null}
              >
                {mapel?.map((data: any, key: any) => (
                  <Option key={key} value={data.id}>
                    {data.nama}
                  </Option>
                ))}
              </Select>
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
          {/* <Questions question={question} /> */}
        </Row>
      </Form>
      {alert.message !== null ? (
        <AlertComponents alert={alert} setAlert={setAlert} />
      ) : null}
    </Drawer>
  );
}

export default CreateTask;
