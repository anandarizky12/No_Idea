import { Avatar } from "antd";
import HeaderReport from "./HeaderReport";

function AllUsersPDF({ data }: any) {
  return (
    <div className="px-7 py-2">
      <HeaderReport />
      <h2 className="text-center font-bold text-2xl mt-5">
        Laporan Pengguna Aplikasi
      </h2>

      <div className="w-full lg:w-6/6">
        <div className=" shadow-md rounded my-6 ">
          <table className="min-w-full border">
            <thead className="border-b">
              <tr className=" text-primary uppercase text-sm leading-normal">
                <th className="border border-black text-xs text-left">No.</th>

                <th className="border border-black text-xs text-center">
                  Nama Pengguna
                </th>
                <th className="border border-black text-xs text-center">
                  Email
                </th>
                <th className="border border-black text-xs text-center">
                  No Telp
                </th>
                <th className="border border-black text-xs text-center">
                  Foto
                </th>
                <th className="border border-black text-xs text-center">
                  Jenis Kelamin
                </th>
                <th className="border border-black text-xs text-center">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="text-primary text-sm font-light">
              {data &&
                data.map((item: any, index: number) => (
                  <tr key={index} className="border-b ">
                    <td className="border border-black text-center">
                      {index + 1}.
                    </td>
                    <td className="border border-black text-center">
                      <span className="font-medium text-xs">{item.name}</span>
                    </td>
                    <td className="border border-black text-center">
                      <span>{item.email}</span>
                    </td>
                    <td className="border border-black text-center">
                      <span>{item.phone}</span>
                    </td>
                    <td className="border border-black text-center">
                      <div className="flex items-center justify-center">
                        <Avatar size={70} src={item.profile} />;
                      </div>
                    </td>
                    <td className="border border-black text-center">
                      <div className="flex items-center justify-center">
                        <span className=" text-xs">{item.jk}</span>
                      </div>
                    </td>
                    <td className="border border-black text-center">
                      <span>{item.role}</span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllUsersPDF;
