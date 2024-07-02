import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Stack } from "react-bootstrap";

import { reset, setState } from "../redux/contacts";


export default function ContactsModalFooter({ setShowModal, handleFooterButtonClick }) {
  const dispatch = useDispatch();
  const { isEven } = useSelector((state) => state.contact);

  const handleEventChange = ({ target: { value } }) => {
    dispatch(setState({ type: "isEven", payload: value }))
  }

  return (
    <div className="d-flex justify-content-between align-items-center w-100">
      <Form.Check
        type={'checkbox'}
        id={`default-checkbox`}
        label={`Even`}
        checked={isEven === 'true'}
        value={isEven === 'false' ? 'true' : 'false'}
        onChange={handleEventChange} />
      <Stack gap={2} direction="horizontal">
        <Button
          variant="secondary"
          className="contact-modal__closeButton"
          onClick={() => {
            dispatch(reset());
            setShowModal(false);
          }}>
          Close
        </Button>
        <Button
          variant="primary"
          className="contact-modal__modalButtonA"
          onClick={() => { handleFooterButtonClick("all_contacts"); }}>
          All Contacts
        </Button>
        <Button
          variant="primary"
          className="contact-modal__modalButtonB"
          onClick={() => { handleFooterButtonClick("us_contacts"); }}>
          US Contacts
        </Button>
      </Stack>
    </div>
  );
}

