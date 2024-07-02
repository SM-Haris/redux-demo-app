import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import ContactsModal from "../components/contactsModal";
import '../styles/style.scss'


export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleModalButtonClick = (type) => {
    setModalType(type)
    window.history.pushState({}, '', '/modal' + type);
    setShowModal(true)
  }

  useEffect(()=>{
    if (!showModal) { window.history.pushState({},'',process.env.REACT_WEB_URL) }
  },[showModal])

  return (
    <>
      <ContactsModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalType={modalType}
        setModalType={setModalType}
      />
      <div className="d-flex flex-column w-100 min-vh-100 home-page">
        <div className="d-flex justify-content-start align-items-center w-100 bg-primary p-2">
          <h1>Contacts List</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center w-100 flex-grow-1">
          <Button
            variant="primary"
            size="lg"
            className="home-page__modalButtonA"
            onClick={() => {handleModalButtonClick('all_contacts')}}>
            All Contacts
          </Button>
          <Button
            variant="primary"
            size="lg"
            className="home-page__modalButtonB"
            onClick={() => {handleModalButtonClick('us_contacts')}}>
            US Contacts
          </Button>
        </div>
      </div>
    </>
  );
}