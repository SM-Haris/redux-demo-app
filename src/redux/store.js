import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { contactReducer } from "./contacts";


export default configureStore({
    reducer: {
        contact: contactReducer
    }
}, applyMiddleware(thunk));