import { Modal } from "antd";

interface DialogBoxProps {
  showDialog: any;
  cancelNavigation: any;
  confirmNavigation: any;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  showDialog,
  cancelNavigation,
  confirmNavigation,
}) => {
  return (
    <Modal
      title="Perhatian"
      visible={showDialog}
      onOk={confirmNavigation}
      onCancel={cancelNavigation}
    >
      <p>
        Apa anda yakin untuk pindah halaman? hasil pengerjaan anda akan hilang
      </p>
    </Modal>
  );
};
export default DialogBox;
