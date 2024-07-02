import { createSelector, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import CONTACTS from "../constants";


export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: Object.values(CONTACTS.CONTACTS.contacts),
    us_contacts: Object.values(CONTACTS.US_CONTACTS.contacts),
    loading: false,
    filteredContacts: Object.values(CONTACTS.CONTACTS.contacts),
    filteredUSContacts: Object.values(CONTACTS.US_CONTACTS.contacts),
    pageNo: 1,
    isEven: 'false',
    searchQuery: "",
  },
  reducers: {
    setState: (state, action) => {
      const { type, payload } = action.payload;
      state[type] = payload;
    },
    reset: (state) => {
      state.searchQuery = "";
      state.isEven = 'false';
      state.filteredContacts = state.contacts;
      state.filteredUSContacts = state.us_contacts;
    }
  },
});

export const {
  setState,
  reset,
} = contactSlice.actions;

export function fetchContacts() {
  return (dispatch) => {
    dispatch(setState({ type: "loading", payload: true }));
    return axios.get("https://api.dev.pastorsline.com/api/contacts.json", {
      headers: {
        Authorization: 'Bearer xyzxyz'
      }
    })
      .then((response) => {
        dispatch(setState({ type: "contacts", payload: response.data }));
        dispatch(setState({ type: "filteredContacts", payload: response.data }));
        dispatch(setState({ type: "loading", payload: false }));
      })
      .catch(() => {
        dispatch(setState({ type: "loading", payload: false }));
      });
  };
}

export function fetchUSContacts() {
  return (dispatch) => {
    dispatch(setState({ type: "loading", payload: true }));
    return axios.get("https://api.dev.pastorsline.com/api/contacts.json", {
      headers: {
        Authorization: 'Bearer xyzxy'
      }
    })
      .then((response) => {
        dispatch(setState({ type: "us_contacts", payload: response.data }));
        dispatch(setState({ type: "filteredUSContacts", payload: response.data }));
        dispatch(setState({ type: "loading", payload: false }));
      })
      .catch(() => {
        dispatch(setState({ type: "loading", payload: false }));
      });
  };
}

const selectContacts = (state) => state.contact.contacts;
const selectUSContacts = (state) => state.contact.us_contacts;
const selectInput = (state) => state.contact.searchQuery; 
const isEvenCheck = (state) => state.contact.isEven; 

export const selectFilteredContacts = createSelector(
  selectContacts,
  selectInput,
  isEvenCheck,
  (contacts, input, isEven) => {
    return contacts.filter(
      (contact) =>
        contact.first_name.toLowerCase().includes(input.toLowerCase()) &&
        (isEven !== 'true' || contact.id % 2 === 0)
    );
  }
);

export const selectFilteredUSContacts = createSelector(
  selectUSContacts,
  selectInput,
  isEvenCheck,
  (contacts, input, isEven) => {
    return contacts.filter(
      (contact) =>
        contact.first_name.toLowerCase().includes(input.toLowerCase()) &&
        (isEven !== 'true' || contact.id % 2 === 0)
    );
  }
);


export const contactReducer = contactSlice.reducer;