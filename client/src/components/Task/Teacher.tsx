import { Button, Spin } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";

function Teacher({ setOpen, open, classroom }: any) {
  return (
    <div className="flex flex-row items-center justify-between border-b-2 p-5 border-gray-200 w-4/6">
      <Button
        icon={<PlusOutlined className="text-xl" />}
        size="large"
        type="primary"
        className="hover:cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        Buat Tugas
      </Button>

      {classroom ? (
        <h1 className="text-gray-500 text-base font-normal">
          {classroom.data.name}
        </h1>
      ) : (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
    </div>
  );
}

export default Teacher;
