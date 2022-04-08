import React from "react";
import { Modal, Button, Spin } from "antd";

export const ReportModal = ({
  classrooms,
  report,
  visible,
  setVisible,
}: any) => {
  const { classroom } = classrooms;

  return (
    <>
      <Modal
        title={report}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={500}
      >
        <h1 className="text-gray-600">Pilih Kelas</h1>
        {classroom && classroom.class.lenght <= 0 && (
          <div className="text-center">
            <h1>Tidak ada Kelas</h1>
          </div>
        )}
        {classroom && classroom.class.length >= 1 ? (
          classroom.class.map((x: any, i: number) => (
            <div className="hover:cursor-pointer " key={i}>
              <h1 className="text-gray-400 font-light hover:text-blue-500 mt-5">
                {x.name}
              </h1>
            </div>
          ))
        ) : (
          <Spin />
        )}
      </Modal>
    </>
  );
};
