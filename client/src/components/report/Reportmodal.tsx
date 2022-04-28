import React, { createRef } from "react";
import { Button, Modal, Spin, Radio } from "antd";
import StudentReport from "./StudentReport";
import ButtonPrint from "./ButtonPrint";

export const ReportModal = ({
  classrooms,
  report,
  visible,
  setVisible,
}: any) => {
  const { classroom } = classrooms;
  const componentRef = createRef<HTMLInputElement>();

  const [id, setId] = React.useState(null);
  //to get choosen classroom by id

  const getFilteredClassroom: [] =
    classroom && classroom.class.filter((item: any) => item.id === id);

  const onChange = (e: any) => {
    setId(e.target.value);
  };

  console.log(getFilteredClassroom, report);

  return (
    <>
      <Modal
        title={report.title}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
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
          <ButtonPrint id={id} componentRef={componentRef} />
        </Radio.Group>
      </Modal>

      {getFilteredClassroom && getFilteredClassroom.length > 0 ? (
        <div className="hidden">
          <StudentReport
            type={report.path}
            data={getFilteredClassroom}
            componentRef={componentRef}
          />
        </div>
      ) : null}
    </>
  );
};
