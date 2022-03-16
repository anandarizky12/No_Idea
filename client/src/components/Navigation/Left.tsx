import React from "react";
import { Drawer, Button, Radio, Space } from "antd";

function Left({ setOpen, open }: any): JSX.Element {
  return (
    <div>
      <Drawer
        title="Basic Drawer"
        placement={"left"}
        closable={false}
        onClose={() => setOpen(false)}
        visible={open}
        key={"left"}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}

export default Left;
