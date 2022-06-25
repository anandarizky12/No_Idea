import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../actions/user";
import moment from "moment";
import { Image, Spin } from "antd";
import DynamicError from "../404/DynamicError";
import ButtonPrint from "../pdf/Button_PDF";
import BiodataPDF from "../pdf/Biodata";

function Biodata_Student() {
  const dispatch = useDispatch();
  const { user_id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const user = useSelector((state: any) => state.getUserById);
  const componentRef: any = React.useRef();

  React.useEffect(() => {
    dispatch(getUserById(user_id, setLoading));
  }, []);

  if (!user.isLoading && user.isError && user.error)
    return (
      <DynamicError
        status={user?.error?.data?.error?.status}
        message={user?.error?.data?.error?.message}
      />
    );

  return (
    <div className="p-10 w-full flex items-center justify-center ">
      <div className="absolute top-32 right-96">
        <ButtonPrint componentRef={componentRef} />
      </div>
      <div className="hidden">
        <div ref={componentRef}>
          <BiodataPDF user={user} />
        </div>
      </div>
      {user && !loading ? (
        <div className="border border-gray-300 rounded-md shadow-md w-3/6 p-4 px-16">
          <div className="">
            <h1 className="text-3xl text-center">Biodata Siswa</h1>
          </div>
          <div className=" mt-12">
            <div className="">
              <Image width={200} src={user?.data?.profile} />
            </div>
            <div className="mt-4">
              <p className="text-lg">
                <span className="font-bold">Nama : </span>
                {user?.data?.name}
              </p>
              <p className="text-lg">
                <span className="font-bold">Email :</span> {user?.data?.email}
              </p>
              <p className="text-lg">
                <span className="font-bold">No Telepon :</span>{" "}
                {user?.data?.phone}
              </p>
              <p className="text-lg">
                <span className="font-bold">Jenis Kelamin :</span>{" "}
                {user?.data?.jk}
              </p>
              <p className="text-lg">
                <span className="font-bold">Agama :</span>{" "}
                {user?.data?.religion}
              </p>
              <p className="text-lg">
                <span className="font-bold">Tempat Lahir :</span>{" "}
                {user?.data?.place_of_birth}
              </p>
              <p className="text-lg">
                <span className="font-bold">Tanggal Lahir :</span>{" "}
                {moment(user?.data?.birth_date).format("LL")}
              </p>
              <p className="text-lg">
                <span className="font-bold">Alamat :</span>{" "}
                {user?.data?.address}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Spin />
      )}
    </div>
  );
}

export default Biodata_Student;
