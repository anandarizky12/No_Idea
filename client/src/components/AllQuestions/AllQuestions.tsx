import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuestions } from "../../actions/task";
import { Skeleton } from "antd";
const AllQuestions = () => {
  const dispatch = useDispatch();
  const [questions, setQuestions] = React.useState<any>([]);
  const { question } = useSelector((state: any) => state.getAllQuestions);
  const limit = 8;
  let page = 1;
  React.useEffect(() => {
    dispatch(getAllQuestions(page, limit));
  }, []);

  React.useEffect(() => {
    if (question) {
      setQuestions(question.data.rows);
    }
  }, [question]);

  console.log(questions);

  return (
    <div className="flex flex-col items-center  w-full h-5/6">
      <div className="w-4/6 mt-8">
        <div className="border-b border-gray-400 px-0 md:px-5 flex justify-between">
          <h1 className="text-xl md:text-3xl font-normal text-gray-500">
            Bank Soal / Daftar Soal Tersedia
          </h1>
        </div>
      </div>
      <div className="mt-3 w-4/6">
        {questions && questions.length > 0 ? (
          questions.map((item: any, index: number) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-md flex my-4 "
            >
              <div className="border-r border-gray-300   text-center w-16 flex items-center justify-center">
                <h1 className="m-0 font-bold text-gray-500 text-xl">
                  {index + 1}
                </h1>
              </div>
              <div className="flex justify-center flex-col h-full mx-4 p-2 w-full">
                <h1 className="font-semibold  text-gray-600 p-0 m-0">
                  {item.question}
                </h1>
                <p className=" text-gray-500 p-0 m-0">
                  <span className="font-semibold text-gray-500">
                    Kunci Jawaban
                  </span>{" "}
                  : {item.answer_key}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              width: "100%",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {[...Array(limit)].map((limit) => (
              <Skeleton.Button
                key={limit}
                active
                size="large"
                shape="square"
                style={{ marginTop: "20px", height: "62px" }}
                block
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllQuestions;
