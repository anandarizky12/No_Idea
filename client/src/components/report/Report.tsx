import React from "react";
import ReportCard from "./ReportCard";
import { ReportModal } from "./Reportmodal";
import { useSelector, useDispatch } from "react-redux";
import { getClassroomByTeacherId } from "../../actions/classroom";
import { getCookie } from "../../utils/utils";
import { reportjson } from "./ReportJson";

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
            type={report.path}
          />
        ))}
      </div>

      {report && (
        <ReportModal
          classrooms={classrooms}
          report={report}
          visible={visible}
          setVisible={setVisible}
        />
      )}
    </div>
  );
}

export default Report;
