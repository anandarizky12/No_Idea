import React from "react";
import {
  TeamOutlined,
  WalletOutlined,
  BoxPlotOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getDataDashboard } from "../../actions/dashboard";
import { Button, Spin } from "antd";
import { getAllUsers } from "../../actions/user";
import User_Table from "./Dashboard_Table/User_Table";
import Edit_User from "./Modal/Edit_User";
import Add_User from "./Modal/Add_User";

function Admin_Dashboard() {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [addUserModal, setAddUserModal] = React.useState(false);

  const [id, setId] = React.useState("");

  const dashboard = useSelector((state: any) => state.getdashboardReducers);
  const getallusers = useSelector((state: any) => state.getAllUsers);
  React.useEffect(() => {
    dispatch(getDataDashboard());
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="">
      <div className="w-full bg-pink-400  h-40 ">
        <div className="flex justify-between flex-row items-center w-full p-10 px-12">
          <p className="text-gray-200 font-light text-xl">Dashboard Admin</p>
          <div className="flex hover:cursor-pointer">
            <Button
              onClick={() => {
                setAddUserModal(true);
              }}
              icon={<TeamOutlined />}
            >
              Tambah User
            </Button>
          </div>
        </div>
        {dashboard && dashboard.data ? (
          <div className="w-full flex px-8 absolute top-36">
            <div className="flex-auto p-4 shadow-md m-5 bg-white h-32 rounded-md overflow-hidden">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    TOTAL USER
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    {dashboard.data.totalUsers.total}
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-300">
                    <TeamOutlined className="text-xl" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4 p-0 m-0">
                Jumlah keseluruhan user pada aplikasi
              </p>
            </div>
            <div className="flex-auto p-4 shadow-md m-5 bg-white h-32 rounded-md overflow-hidden">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    TOTAL KELAS
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    {dashboard.data.totalClasses.total}
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-300">
                    <WalletOutlined className="text-xl" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4 p-0 m-0">
                Jumlah keseluruhan kelas pada aplikasi
              </p>
            </div>
            <div className="flex-auto p-4 shadow-md m-5 bg-white h-32 rounded-md overflow-hidden">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    TOTAL TUGAS
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    {dashboard.data.totalTasks.total}
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-300">
                    <BoxPlotOutlined className="text-xl" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4 p-0 m-0">
                Jumlah keseluruhan tugas pada aplikasi
              </p>
            </div>
          </div>
        ) : (
          <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center bg-gray-100 z-10">
            <Spin size={"large"} />
          </div>
        )}
      </div>
      <div className="mt-32 w-full">
        <User_Table
          users={getallusers}
          setIsModalVisible={setIsModalVisible}
          setId={setId}
        />
      </div>
      <Edit_User
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        id={id}
      />
      <Add_User addUserModal={addUserModal} setAddUserModal={setAddUserModal} />
    </div>
  );
}

export default Admin_Dashboard;
