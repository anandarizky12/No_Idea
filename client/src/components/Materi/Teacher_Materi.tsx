import React from "react";
import { Button, Spin, Modal, Form, Input, Upload, message } from "antd";
import {
  PlusOutlined,
  LoadingOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import { useDispatch } from "react-redux";
import { createMateri } from "../../actions/classroom";
import { useParams } from "react-router-dom";
import { handleChange } from "../../utils/utils";

function Teacher_Materi({ setOpen, open, classroom }: any) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [visible, setVisible] = React.useState(false);
  const [payload, setPayload] = React.useState({
    title: null,
    description: null,
    file: null,
    classroom_id: id,
  });

  const handleSubmit = () => {
    dispatch(createMateri(payload));
  };

  const handleCancel = () => {
    setVisible(false);
  };

  // const uploadFile = async (e: any) => {
  //   const file = e.target.files[0];

  //   try {
  //     const link = URL.createObjectURL(e.target.files[0]);
  //     setFile(link);

  //     const formData = new FormData();
  //     formData.append("file", file);
  //     setLoading(true);

  //     const config = {
  //       headers: {
  //         "content-type": "multipart/form-data",
  //       },
  //     };

  //     const res = await axios.post(
  //       `http://localhost:5000/file/fileupload`,
  //       formData,
  //       config
  //     );
  //     console.log(res.data);
  //     setPayload({ ...payload, file: res.data });
  //     setLoading(false);
  //   } catch (err) {
  //     setLoading(false);
  //     console.log(err);
  //   }
  // };
  const props: UploadProps = {
    name: "file",
    action: "http://localhost:5000/file/fileupload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        setPayload({ ...payload, file: info.file.response });
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="flex flex-row items-center justify-between border-b-2 p-5 border-gray-200 w-4/6">
      <Button
        icon={<PlusOutlined className="text-xl" />}
        size="large"
        type="primary"
        className="hover:cursor-pointer "
        onClick={() => setVisible(!open)}
      >
        Tambah Materi
      </Button>
      <Modal
        title="Tambah Materi"
        visible={visible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        {/* {loading ? (
          <div className="w-full text-center">
            <Spin />
            <p className="mt-2">Mohon Tunggu...</p>
          </div>
        ) : ( */}
        <>
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Please enter Materi Name" }]}
          >
            <Input
              placeholder="Masukan Judul"
              name="title"
              onChange={(e) => handleChange(e, payload, setPayload)}
            />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[{ required: true, message: "Please enter Description" }]}
          >
            <Input.TextArea
              placeholder="Masukan Deskripsi"
              name="description"
              onChange={(e) => handleChange(e, payload, setPayload)}
            />
          </Form.Item>
          <Upload maxCount={1} {...props}>
            <Button type="primary" icon={<UploadOutlined />}>
              Click to Upload
            </Button>
          </Upload>
        </>
        {/* )} */}
      </Modal>
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

export default Teacher_Materi;

// <div class="d-flex align-items-center p-2">
//   <div class="AttachmentItem__icon d-flex justify-content-center align-items-center flex-shrink-0">
//     <svg width="24" height="24" viewBox="0 0 24 24" name="pdf-icon">
//       <path
//         fill-rule="evenodd"
//         clip-rule="evenodd"
//         d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6z"
//         fill="#FF3352"
//       ></path>
//       <path
//         d="M5.41 15.044c.554 0 .866-.338.866-.932v-.879h.787c1.463 0 2.342-.734 2.342-2.122C9.405 9.823 8.548 9 7.168 9H5.59c-.751 0-1.046.317-1.046 1.13v3.981c0 .598.308.932.866.932zm.87-3.059v-1.678h.602c.532 0 .822.303.822.835 0 .62-.294.843-.87.843H6.28zM9.816 14.095c0 .571.334.905.9.905h1.627c1.78 0 2.746-1.05 2.746-3.002 0-1.946-.966-2.997-2.746-2.997h-1.626c-.567 0-.901.334-.901.906v4.188zm1.731-.444v-3.305h.493c.892 0 1.274.497 1.274 1.652 0 1.156-.382 1.653-1.274 1.653h-.493zM16.48 15.044c.545 0 .844-.33.844-.932v-1.235h1.7c.388 0 .651-.268.651-.659 0-.39-.259-.659-.65-.659h-1.7v-1.195h1.92c.378 0 .654-.277.654-.677 0-.396-.276-.686-.654-.686h-2.76c-.558 0-.897.339-.897.906v4.205c0 .594.326.932.893.932z"
//         fill="#fff"
//       ></path>
//     </svg>
//   </div>
//   <div class="pl-2_5 w-100">
//     <div class="title">
//       <a
//         href="https://api.edmodo.com/files/1371299642/download?f=bdc4fk5uf33p1lr2f1uw8gki4"
//         target="_blank"
//         rel="noopener noreferrer"
//         class="qa-test-AttachmentItem__title AttachmentItem__title"
//       >
//         SURAT CINTA.pdf
//       </a>
//     </div>
//     <span class="subtext"></span>
//   </div>
//   <div class="pl-8">
//     <div class="__dropmenu AttachmentItem__actions qa-test-attachment-dropDown-menu __dropmenu-right ">
//       <div class="drop-selector">
//         <svg width="24" height="24" viewBox="0 0 24 24" name="EllipsisIcon">
//           <path
//             fill="#73778b"
//             fill-rule="evenodd"
//             stroke="none"
//             stroke-width="1"
//             id="Icon/small/ellipsis"
//             d="M18.5 11a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-6 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-6 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
//           ></path>
//         </svg>
//       </div>
//       <div class="__dropmenu-list qa-test-dropmenu-list   __dropmenu-list-hide-arrow ">
//         <ul>
//           <li
//             class="__dropmenu-list-item qa-test-dropDown-menu-item-download"
//             role="button"
//           >
//             <span class="option">
//               <span>Download</span>
//             </span>
//           </li>
//           <li
//             class="__dropmenu-list-item qa-test-dropDown-menu-item-add-to-backpack"
//             role="button"
//           >
//             <span class="option">
//               <span>Add to Backpack</span>
//             </span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>;
