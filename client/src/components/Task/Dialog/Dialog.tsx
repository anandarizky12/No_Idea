import { Button, Modal } from "antd";

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
    // <Modal show={showDialog}>
    //   <Modal.Header>
    //     <Modal.Title>Warning</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <b>There are some changes?</b>
    //     <br /> Are you sure you want to navigate!!!!
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="primary" onClick={cancelNavigation}>
    //       No
    //     </Button>
    //     <Button variant="danger" onClick={confirmNavigation}>
    //       Yes
    //     </Button>
    //   </Modal.Footer>
    //   \
    // </Modal>
  );
};
export default DialogBox;
