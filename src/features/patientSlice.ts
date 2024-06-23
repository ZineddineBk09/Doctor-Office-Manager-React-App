// src/features/patientsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../lib/axios";

// Async thunk to fetch patients
export const fetchPatients = createAsyncThunk(
  "patients/fetchPatients",
  async () => {
    const response = await axios.get(`/patients`);
    return response.data;
  }
);

// Async thunk to fetch a single patient's details
export const fetchPatientDetails = createAsyncThunk(
  "patients/fetchPatientDetails",
  async (patientId: string) => {
    const response = await axios.get(`/patients/${patientId}`);
    return response.data;
  }
);

const patientsSlice = createSlice({
  name: "patients",
  initialState: {
    patients: [],
    patientDetails: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.patients = action.payload;
      })
      .addCase(fetchPatients.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchPatientDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPatientDetails.fulfilled, (state: any, action) => {
        state.status = "succeeded";
        state.patientDetails = action.payload;
      })
      .addCase(fetchPatientDetails.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default patientsSlice.reducer;
