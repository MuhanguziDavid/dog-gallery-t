import Modal from 'react-bootstrap/Modal';

type CustomModalProps = {
  show: boolean
  currentImage: string
  handleClose: () => void
}

const CustomModal = ({ show, currentImage, handleClose }: CustomModalProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <img className="img-fluid" src={currentImage} alt="dog"/>
      </Modal.Body>
    </Modal>
  )
}

export default CustomModal
