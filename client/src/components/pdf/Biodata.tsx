import { Image } from "antd";
import moment from "moment";
import Header_Report from "./Header_Report";
function BiodataPDF({ user }: any) {
  return (
    <div className="w-full flex items-center justify-center">
      {" "}
      <div className="w-full rounded-md shadow-md p-4 px-24 mt-12">
        <div>
          <div>
            <Header_Report />
          </div>
          <h1 className="text-3xl text-center mt-5">Biodata Siswa</h1>
        </div>
        <div className=" mt-12">
          <div>
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
              <span className="font-bold">Agama :</span> {user?.data?.religion}
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
              <span className="font-bold">Alamat :</span> {user?.data?.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiodataPDF;
