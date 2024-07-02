import React from "react";
import { Form, InputGroup } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { setState } from "../redux/contacts";


export default function SearchBar({ }) {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.contact);

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-default">
        Search
      </InputGroup.Text>
      <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        value={searchQuery}
        onChange={(e) => {
          dispatch(setState({ type: "searchQuery", payload: e.target.value }))
        }} />
    </InputGroup>
  );
}