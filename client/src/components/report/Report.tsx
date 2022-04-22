import React from "react";
import ReportCard from "./ReportCard";
import { ReportModal } from "./Reportmodal";
import { useSelector, useDispatch } from "react-redux";
import { getClassroomByTeacherId } from "../../actions/classroom";
import { getCookie } from "../../utils/utils";

const reportjson = [
  {
    title: "Laporan Biodata Guru",
    title2: "Teacher Bidata Report Data",
    description: "Ini adalah Laporan Biodata Guru",
    photo: "",
    path: "bioteacher",
  },
  {
    title: "Laporan Data Nilai",
    title2: "Score Report Data",
    description: "Ini adalah Laporan Data Nilai",
    photo: "",
    path: "score",
  },
  {
    title: "Laporan Data Siswa",
    title2: "Students Report Data",
    description: "Ini adalah Laporan Data Siswa",
    photo: "",
    path: "students",
  },
  {
    title: "Laporan Data Kelas",
    title2: "Class Report Data",
    description: "Ini adalah Laporan Data Kelas",
    photo: "",
    path: "classes",
  },
  {
    title: "Laporan Data Nilai Siswa Lulus",
    title2: "Class Report Data",
    description: "Ini adalah Laporan Data Nilai siswa lulus (di atas kkm)",
    photo: "",
    path: "studetspass",
  },
  {
    title: "Laporan Data Nilai Tidak Siswa Lulus",
    title2: "Class Report Data",
    description:
      "Ini adalah Laporan Data Nilai Tidak siswa lulus (di bawah kkm)",
    photo: "",
    path: "studetsfail",
  },
  {
    title: "Laporan Biodata Siswa",
    title2: "Students Biodata Report",
    description: "Ini adalah Laporan Biodata Siswa",
    photo: "",
    path: "biostudent",
  },
  {
    title: "Laporan Data Tugas",
    title2: "Task Report Data",
    description: "Ini adalah Laporan Data Tugas (di bawah kkm)",
    photo: "",
    path: "tasks",
  },
];

function Report() {
  const [visible, setVisible] = React.useState(false);
  const [report, setReport] = React.useState(null);
  const id = getCookie("id");
  const dispatch = useDispatch();
  const classrooms = useSelector(
    (state: any) => state.getClassroomByTeacherIdReducers
  );

  React.useEffect(() => {
    dispatch(getClassroomByTeacherId(id));
  }, []);

  return (
    <div className="w-full h-5/6 flex items-center justify-center mt-5 mb-5">
      <div className="w-8/12 h-full flex flex-wrap ">
        {reportjson.map((report, i) => (
          <ReportCard
            setReport={setReport}
            setVisible={setVisible}
            key={i}
            report={report}
          />
        ))}
      </div>
      <ReportModal
        classrooms={classrooms}
        report={report}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  );
}

export default Report;
