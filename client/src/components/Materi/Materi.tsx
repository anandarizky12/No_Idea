import React from "react";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllMateri, getClassroom } from "../../actions/classroom";
import { useParams } from "react-router-dom";

import Teacher_Materi from "./Teacher_Materi";
import DynamicError from "../404/DynamicError";
import Card_Materi from "./Card_Materi";

function Materi() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { classroom } = useSelector((state: any) => state.getClassroom);
  const materiData = useSelector((state: any) => state.getAllMateri);
  const { materi } = materiData;
  const user = useSelector((state: any) => state.user);

  React.useEffect(() => {
    dispatch(getClassroom(id));
    dispatch(getAllMateri(id));
  }, [id]);

  if (!materiData?.isLoading && materiData?.isError && materiData?.error)
    return (
      <DynamicError
        status={materiData?.error?.status}
        message={materiData?.error?.data?.message}
      />
    );

  return (
    <div className="flex flex-col items-center ">
      <div className="w-4/6 mt-7">
        <div className="border-b border-gray-400 px-0 md:px-0 flex justify-between">
          <h1 className="text-xl md:text-3xl font-normal text-gray-500">
            Materi Kelas
          </h1>
          <div className="flex items-center justify-center text-gray-500 font-bold">
            {materi ? "Total " + materi?.data?.length + " Materi" : null}
          </div>
        </div>
      </div>
      {user.role === "guru" && classroom ? (
        <Teacher_Materi open={open} setOpen={setOpen} classroom={classroom} />
      ) : null}

      <div className="w-full md:5/6  mt-5 md:mt-8 flex flex-col items-center justify-center">
        {!materi && (
          <div className="flex h-96 items-center justify-center">
            <Spin size="large" />
          </div>
        )}
        {materi && materi.data.length > 0 ? (
          materi.data.map((materi: any, number: Number) => {
            return (
              <div
                key={materi.id}
                className="flex p-4 md:p-0 md:w-4/6 items-center justify-center"
              >
                <Card_Materi
                  title={materi.name}
                  description={materi.description}
                  file={materi.file}
                  date={materi.createdAt}
                />
              </div>
            );
          })
        ) : (
          <div className="w-full h-96 flex items-center justify-center">
            <h1 className="text-gray-500 font-normal text-base">
              Kelas ini belum memiliki tugas
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Materi;
