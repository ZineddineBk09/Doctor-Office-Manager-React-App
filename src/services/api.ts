// src/services/api.ts
import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Appointments API
export const fetchAppointments = async () => {
  const response = await api.get("/appointments");
  return response.data;
};

export const updateAppointmentStatus = async (
  appointmentId: string,
  status: string
) => {
  const response = await api.put(`/appointments/${appointmentId}`, { status });
  return response.data;
};

// Patients API
export const fetchPatients = async () => {
  const response = await api.get("/patients");
  return response.data;
};

export const fetchPatientDetails = async (patientId: string) => {
  const response = await api.get(`/patients/${patientId}`);
  return response.data;
};

// Messages API
export const fetchMessages = async () => {
  const response = await api.get("/messages");
  return response.data;
};

export const sendMessage = async (message: {
  content: string;
  patientId: string;
}) => {
  const response = await api.post("/messages", message);
  return response.data;
};
