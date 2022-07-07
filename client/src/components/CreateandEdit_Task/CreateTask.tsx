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
const { Option } = Select;

function CreateTask({ setOpen, open }: any) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [mapel, setMapel] = React.useState<any>();
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

  const [state, setState] = React.useState<any>({
    title: null,
    description: null,
    other: null,
    user_id: id_user,
    deadline: null,
    classroom_id: id,
    mapel_id: null,
  });

  function onChangeDate(date: any, dateString: any): void {
    setState({
      ...state,
      deadline: dateString,
    });
  }

  const handleSubmit = () => {
    dispatch(createTask(state, question, id));
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
                autoComplete="off"
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="deadline"
              label="Batas Pengerjaan"
              rules={[{ required: true, message: "Please select Deadline" }]}
            >
              <DatePicker name="deadline" onChange={onChangeDate} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Deskripsi Tugas"
              rules={[{ required: true, message: "Please enter Description" }]}
            >
              <Input
                placeholder="Masukan Deskripsi Tugas"
                name="description"
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
                autoComplete="off"
                onChange={(e) => handleChange(e, state, setState)}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="mapel_id" label="Mata Pelajaran">
              <Select
                defaultValue="Pilih Mata Pelajaran"
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
    </Drawer>
  );
}

export default CreateTask;
