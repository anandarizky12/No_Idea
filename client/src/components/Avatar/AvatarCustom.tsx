import React from "react";
import { Avatar } from "antd";

function AvatarCustom({ size, src }: any) {
  return (
    <Avatar
      className="text-xl hover:cursor-pointer"
      size={size}
      style={{
        border: "3px solid #e6e6e6",
      }}
      src={
        src
          ? src
          : "https://res.cloudinary.com/drgorgm6v/image/upload/v1648910579/user_brvzvx.png"
      }
    />
  );
}

export default AvatarCustom;
