import React, { useEffect, useMemo } from "react";

import { Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts, fetchUSContacts, reset, selectFilteredContacts, selectFilteredUSContacts } from "../redux/contacts";
import SearchBar from "./searchBar";
import ContactsList from "./contactsList";
import ContactsModalFooter from "./contactsModalFooter";

import '../styles/style.scss'


export default function ContactsModal({ showModal, setShowModal, modalType, setModalType }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contact.loading)
  const filteredContacts = useSelector(selectFilteredContacts);
  const filteredUSContacts = useSelector(selectFilteredUSContacts);

  const isModalTypeA = useMemo(() => {
    return modalType === 'all_contacts';
  }, [modalType]);

  useEffect(() => {
    if (showModal) {
      isModalTypeA ? dispatch(fetchContacts()) : dispatch(fetchUSContacts());
    }
    // eslint-disable-next-line
  }, [isModalTypeA]);

  const handleFooterButtonClick = (type) => {
    dispatch(reset());
    setModalType(type);
    window.history.pushState({}, '', '/modal' + type);
  }

  return (
    <div className="contact-modal">
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
        show={showModal}
        onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{isModalTypeA ? "All Contacts" : "US Contacts"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <SearchBar
            isModalTypeA={isModalTypeA}
          />

          {!loading ?
            (isModalTypeA ? <ContactsList contacts={filteredContacts} /> : <ContactsList contacts={filteredUSContacts} />)
            :
            (<div className="d-flex w-100 justify-content-center align-item-center h-100">
              <Spinner animation="grow" />
            </div>)
          }

        </Modal.Body>
        <Modal.Footer>

          <ContactsModalFooter
            setShowModal={setShowModal}
            handleFooterButtonClick={handleFooterButtonClick} />

        </Modal.Footer>
      </Modal>
    </div>
  );
}