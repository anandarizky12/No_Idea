import React, { createRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Spin, Radio } from "antd";
import StudentReport from "./StudentReport";
import ButtonPrint from "./ButtonPrint";
import { getClassroom, getStudentsinClassroom } from "../../actions/classroom";
import { getAllScores, getTaskInClassroom } from "../../actions/task";

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
  //to get choosen classroom by id

  const getFilteredClassroom: [] =
    classroom && classroom.class.filter((item: any) => item.id === id);

  const onChange = (e: any) => {
    setId(e.target.value);
  };
  const handleCancel = () => {
    setVisible(false);
    setId(null);
  };

  const { scores } = useSelector((state: any) => state.getAllScores);
  const classes = useSelector((state: any) => state.getClassroom);
  const taskData = useSelector((state: any) => state.getTaskInClassroom);
  const data = useSelector((state: any) => state.getStudentsInClassroom);
  const { students } = data;
  const dispatch = useDispatch();

  const HandleReportDispatch = (id: string, type: string) => {
    // const dispatch = useDispatch();

    switch (type) {
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
      case "tasks_report":
        dispatch(getTaskInClassroom(id));
        return taskData;
      default:
        break;
    }
  };

  useEffect(() => {
    if (id) {
      console.log(HandleReportDispatch(id, report.type));
    }
  }, [report.type]);

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
          <ButtonPrint
            loading={printLoading}
            setPrintLoading={setPrintLoading}
            id={id}
            componentRef={componentRef}
          />
        </Radio.Group>
      </Modal>

      {getFilteredClassroom && getFilteredClassroom.length > 0 ? (
        // <div className="hidden">
        <StudentReport
          type={report.path}
          data={getFilteredClassroom}
          componentRef={componentRef}
        />
      ) : // </div>
      null}
    </>
  );
};
