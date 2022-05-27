
import { Modal } from "antd";


const { confirm } = Modal;

export default function showConfirm(message: string, action: any) {
    confirm({
      title: message,
      centered: true,
      onOk() {
        action();
      },
      onCancel() {
        return ;
      },
    });
  }
