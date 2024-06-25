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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
