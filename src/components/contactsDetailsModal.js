import { Button, Modal } from "react-bootstrap";
import '../styles/style.scss'


export default function ({ showModal, setShowModal, contact }) {
  return (
    <Modal aria-labelledby="contained-modal-title-vcenter contact-modal" centered show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Contact Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>First Name: </h6>{contact?.first_name}
        <h6>Last Name: </h6>{contact?.last_name}
        <h6>Email: </h6>{contact?.email}
        <h6>Phone Number: </h6>{contact?.phone_number}
        <h6>Country ID: </h6>{contact?.country_id}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="contact-modal__closeButton"
          onClick={() => setShowModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}