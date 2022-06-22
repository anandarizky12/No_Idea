import React from "react";
import { Image } from "antd";
import moment from "moment";
function BiodataPDF({ user }: any) {
  return (
    <div className="w-full flex items-center justify-center">
      {" "}
      <div className="w-full rounded-md shadow-md p-4 px-24 mt-12">
        <div className="">
          <div className="">
            <div className="" id="logo"></div>
            <div className="flex border-b border-black py-2">
              <div className="">
                <img src="/logo_SMK.png" width={120} />
              </div>
              <div className="ml-4">
                <h2 className="p-0 m-0 text-2xl font-bold">
                  Sekolah Menengah Kejuruan Negeri 1 Sukamara
                </h2>
                <p className="p-0 m-0 text-left">
                  JL. CILIK RIWUT KM. 4, Mendawai, Kec. Sukamara, Kab. Sukamara
                  Prov. Kalimantan Tengah
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-3xl text-center mt-5">Biodata Siswa</h1>
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
