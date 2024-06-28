import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../lib/axios";
import { Patient } from "@/interfaces";
import { fakePatients } from "../data/examples";

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
    patients: [] as Patient[],
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
        console.log("action.payload", JSON.parse(action.payload));
        state.patients = action.payload;
      })
      .addCase(fetchPatients.rejected, (state: any, action) => {
        state.status = "failed";

        // check if error contains status code 429 ==> too many requests to mock api
        if ((action.error.message as any).includes("429")) {
          state.patients = fakePatients;
          return;
        }

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
