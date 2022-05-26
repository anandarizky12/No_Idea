import React, { useRef } from "react";
import { Avatar, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";

function ImageChange({ setSelectedImg, state }: any) {
  const [image, setImage] = React.useState("");
  const dispatch = useDispatch();
  const [preview, setPreview] = React.useState("");

  const ref = useRef<any>(null);

  const openFile = () => {
    if (ref.current) {
      ref.current.click();
    }
  };
  const previewFile = (file: any) => {
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };
  const chooseImage = (e: any): void => {
    const file = e.target.files[0];
    setImage(file);
    setSelectedImg({ ...state, profile: file });
    previewFile(file);
  };

  console.log(state);

  return (
    <div>
      <div className="mb-6" onClick={openFile}>
        <Avatar
          size={180}
          style={{
            border: "3px solid #424242",
          }}
          className="hover:cursor-pointer hover:shadow-xl rounded-full "
          src={`${
            !preview
              ? state.profile && state.profile !== "null"
                ? state.profile
                : "https://res.cloudinary.com/drgorgm6v/image/upload/v1648910579/user_brvzvx.png"
              : preview
          }`}
        />
      </div>
      {/* <Image
        preview={false}
        width={150}
        height={150}
        onClick={openFile}
        src={`${
          !preview
            ? state.profile && state.profile !== "null"
              ? state.profile
              : "https://res.cloudinary.com/drgorgm6v/image/upload/v1648910579/user_brvzvx.png"
            : preview
        }`}
        className="mb-5 hover:cursor-pointer hover:shadow-xl rounded-full "
      /> */}
      <input
        ref={ref}
        className="hidden"
        type="file"
        onChange={(e) => chooseImage(e)}
        accept="image/png, image/gif, image/jpeg"
      />
    </div>
  );
}

export default ImageChange;
