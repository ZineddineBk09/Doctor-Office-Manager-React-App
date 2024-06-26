import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../lib/axios";
import { Appointment } from "../interfaces";
import { fakeAppointments } from "../data/examples";

// Async thunk to fetch appointments
export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAppointments",
  async () => {
    const response = await axios.get(`/appointments`);
    return response.data;
  }
);

// Async thunk to accept an appointment
export const acceptAppointment = createAsyncThunk(
  "appointments/acceptAppointment",
  async (appointmentId: string) => {
    const response = await axios.put(`/appointments/${appointmentId}`, {
      status: "accepted",
    });

    return response.data;
  }
);

// Async thunk to reject an appointment
export const rejectAppointment = createAsyncThunk(
  "appointments/rejectAppointment",
  async (appointmentId: string) => {
    const response = await axios.put(`/appointments/${appointmentId}`, {
      status: "rejected",
    });
    return response.data;
  }
);

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: fakeAppointments as Appointment[],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.status = "failed";

        // check if error contains status code 429 ==> too many requests to mock api
        if ((action.error.message as any).includes("429")) {
          state.appointments = fakeAppointments;
          return;
        }
        state.error = action.error.message as any;
      })
      .addCase(acceptAppointment.fulfilled, (state: any, action) => {
        const index = state.appointments.findIndex(
          (appointment: any) => appointment.id === (action.payload.id as any)
        );
        state.appointments[index] = action.payload;
      })
      .addCase(rejectAppointment.fulfilled, (state: any, action) => {
        const index = state.appointments.findIndex(
          (appointment: any) => appointment.id === (action.payload.id as any)
        );
        state.appointments[index] = action.payload;
      });
  },
});

export default appointmentsSlice.reducer;
