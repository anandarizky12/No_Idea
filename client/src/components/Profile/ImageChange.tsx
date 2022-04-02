import React, { useRef } from "react";
import { Image } from "antd";

function ImageChange() {
  const [image, setImage] = React.useState("");
  const [preview, setPreview] = React.useState("");
  interface RefObject {
    click: () => void;
  }
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
    previewFile(file);
  };

  console.log(preview);

  return (
    <div>
      <Image
        preview={false}
        width={200}
        onClick={openFile}
        src={`${
          !preview
            ? "https://res.cloudinary.com/drgorgm6v/image/upload/v1648910579/user_brvzvx.png"
            : preview
        }`}
        className="mb-5 hover:cursor-pointer hover:shadow-xl"
      />
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
