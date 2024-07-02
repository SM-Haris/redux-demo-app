import React, { useState } from "react";

import { Card, Container } from "react-bootstrap";
import Scrollbars from "react-custom-scrollbars-2";

import ContactsDetailsModal from "./contactsDetailsModal";


export default function ContactsList({ contacts }) {
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [contactDetails, setContactDetails] = useState()

  return (
    <>
      <ContactsDetailsModal showModal={showDetailsModal} setShowModal={setShowDetailsModal} contact={contactDetails} />
      <Container className="border border-primary bg-secondary rounded-2 contact-modal__listContainer" >
        <Scrollbars className="contact-modal__scrollBar">
          {contacts && contacts.map(contact => (
            <Card
              className="contact-modal__contactCard"
              onClick={() => {
                setContactDetails(contact)
                setShowDetailsModal(true)
              }}>
              <Card.Body>{contact.id}: {contact.first_name}</Card.Body>
            </Card>))
          }
        </Scrollbars>
      </Container>
    </>
  )
}