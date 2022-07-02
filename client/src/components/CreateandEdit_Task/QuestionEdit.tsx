import React, { useState } from "react";
import { Row, Form, Col, Input, Button } from "antd";
import { handleChange } from "../../utils/utils";
import { editQuestion } from "../../actions/task";

interface iProps {
  question: any;
  index: number;
  dispatch: any;
}

export const QuestionEdit = ({ question, index, dispatch }: iProps) => {
  const [state, setState] = useState({
    question: question.question,
    answer_key: question.answer_key,
  });

  const handleEdit = () => {
    dispatch(editQuestion(state, question.id));
  };

  console.log(state);

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Form.Item
          label={`Soal ${index + 1}`}
          rules={[{ required: true, message: "Please enter Task Name" }]}
        >
          <Input
            placeholder="Masukan Soal"
            name={`question`}
            defaultValue={state.question}
            onChange={(e) => handleChange(e, state, setState)}
          />
        </Form.Item>
        <Form.Item
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
            name={`answer_key`}
            defaultValue={state.answer_key}
            onChange={(e) => handleChange(e, state, setState)}
            placeholder="Please enter the answer key"
          />
        </Form.Item>
        <Button
          onClick={handleEdit}
          type="primary"
          size="small"
          style={{
            float: "right",
            fontSize: "10px",
          }}
        >
          Edit Soal {index + 1}
        </Button>
      </Col>
    </Row>
  );
};
