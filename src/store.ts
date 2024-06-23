// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import appointmentsReducer from "./features/appointmentSlice";
import patientsReducer from "./features/patientSlice";
import messagesReducer from "./features/messageSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentsReducer,
    patients: patientsReducer,
    messages: messagesReducer,
  },
});

export default store;
