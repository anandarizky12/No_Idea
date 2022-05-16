import React, { createRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Spin, Radio } from "antd";
import StudentReport from "./StudentReport";
import ButtonPrint from "./ButtonPrint";
import { getClassroom, getStudentsinClassroom } from "../../actions/classroom";
import { getAllScores, getTaskInClassroom } from "../../actions/task";
import { ReportExcel } from "./ReportCsv";

export const ReportModal = ({
  classrooms,
  report,
  visible,
  setVisible,
}: any) => {
  const { classroom } = classrooms;
  const componentRef = createRef<HTMLInputElement>();

  const [printLoading, setPrintLoading] = useState(false);
  const [id, setId] = React.useState(null);
  const [dataSet, setDataSet] = React.useState([]);
  //to get choosen classroom by id

  const getFilteredClassroom: [] =
    classroom && classroom.class.filter((item: any) => item.id === id);

  const onChange = (e: any) => {
    setId(e.target.value);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const scores = useSelector((state: any) => state.getAllScores);
  const classes = useSelector((state: any) => state.getClassroom);
  const taskData = useSelector((state: any) => state.getTaskInClassroom);
  const students = useSelector((state: any) => state.getStudentsInClassroom);

  const dispatch = useDispatch();

  const HandleReportDispatch = async (id: string, type: string) => {
    // const dispatch = useDispatch();

    switch (type) {
      case "tasks_report":
        dispatch(getTaskInClassroom(id));
        let tasks = new Promise((resolve) => {
          if (taskData.task) {
            resolve(taskData.task.data);
          }
        });
        let data: any = await tasks;
        if (data) {
          setDataSet(data);
        }
        break;
      case "classes_report":
        dispatch(getClassroom(id));
        return classes;
      case "student_bio_report":
        dispatch(getStudentsinClassroom(id));
        return students;
      case "scores_report_pass":
        dispatch(getAllScores(id));
        return scores;
      case "scores_report_fail":
        dispatch(getAllScores(id));
        return scores;
      default:
        break;
    }
  };

  useEffect(() => {
    if (id) HandleReportDispatch(id, report.type);
  }, [visible, id]);
  console.log(dataSet);
  console.log(report.type, id);

  return (
    <>
      <Modal
        title={report.title}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => handleCancel()}
        width={500}
      >
        <h1 className="text-gray-600">Pilih Kelas</h1>
        {classroom && classroom.class.length <= 0 && (
          <div className="text-center">
            <h1>Tidak ada Kelas</h1>
          </div>
        )}
        <Radio.Group size={"small"} onChange={onChange}>
          {classroom && classroom.class.length >= 1 ? (
            classroom.class.map((x: any, i: number) => (
              <div
                className="hover:cursor-pointer py-2 text-xs text-gray-200"
                key={i}
              >
                <Radio className="text-gray-500 text-xs" value={x.id}>
                  {x.name}
                </Radio>
              </div>
            ))
          ) : (
            <Spin />
          )}
          {/* <ButtonPrint
            loading={printLoading}
            setPrintLoading={setPrintLoading}
            id={id}
            componentRef={componentRef}
          /> */}
        </Radio.Group>
        <div className="w-full">
          <ReportExcel dataSet={dataSet} />
        </div>
      </Modal>
    </>
  );
};
