import { Row, Form, Col, Input } from "antd";
import { handleChangeQuestion } from "../../utils/utils";

function Questions(question: any, index: number, data: any) {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Form.Item
          name={`question_${question.index}`}
          label={`Soal ${question.index + 1}`}
          rules={[{ required: true, message: "Please enter Task Name" }]}
        >
          <Input
            placeholder="Enter Task Name"
            name={`question_${question.index}`}
            autoComplete="off"
            defaultValue={
              question.question[question.index][
                `${"question_" + question.index}`
              ]
            }
            onChange={(e) =>
              handleChangeQuestion(
                e,
                question.question,

                question.index
              )
            }
          />
        </Form.Item>
        <Form.Item
          label="Kunci Jawaban"
          name={`answer_key_${question.index}`}
          rules={[
            {
              required: true,
              message: "Please enter the answer key",
            },
          ]}
        >
          <Input.TextArea
            rows={4}
            name={`answer_key_${question.index}`}
            autoComplete="off"
            defaultValue={
              question.question[question.index][
                `${"answer_key_" + question.index}`
              ]
            }
            onChange={(e) =>
              handleChangeQuestion(e, question.question, question.index)
            }
            placeholder="Please enter the answer key"
          />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default Questions;
