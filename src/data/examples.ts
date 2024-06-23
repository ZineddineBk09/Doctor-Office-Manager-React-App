import { User, UserProfile } from "../interfaces";
import { Doctor } from "../interfaces";
import { Patient, MedicalHistory } from "../interfaces";
import { Appointment } from "../interfaces";
import { Message } from "../interfaces";

export const exampleUser: User = {
  id: "user1",
  email: "john.doe@example.com",
  role: "patient",
  profile: {
    firstName: "John",
    lastName: "Doe",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    dateOfBirth: "1980-01-01",
    gender: "male",
  },
};

export const exampleUserProfile: UserProfile = {
  firstName: "John",
  lastName: "Doe",
  phone: "123-456-7890",
  address: "123 Main St, Anytown, USA",
  dateOfBirth: "1980-10-15",
  gender: "male",
};

export const exampleDoctor: Doctor = {
  id: "doctor1",
  email: "dr.smith@example.com",
  role: "doctor",
  profile: {
    firstName: "Anna",
    lastName: "Smith",
    phone: "098-765-4321",
    address: "456 Elm St, Othertown, USA",
    dateOfBirth: "1975-05-15",
    gender: "female",
  },
  specialty: "Cardiology",
  yearsOfExperience: 15,
  bio: "Experienced cardiologist with a passion for patient care.",
};

const exampleMedicalHistory: MedicalHistory = {
  id: "history1",
  condition: "Hypertension",
  dateDiagnosed: "2015-03-01",
  treatment: "Medication and lifestyle changes",
};

export const examplePatient: Patient = {
  id: "patient1",
  email: "jane.doe@example.com",
  role: "patient",
  profile: {
    firstName: "Jane",
    lastName: "Doe",
    phone: "321-654-0987",
    address: "789 Pine St, Sometown, USA",
    dateOfBirth: "1990-06-15",
    gender: "female",
  },
  medicalHistory: [exampleMedicalHistory],
};

export const exampleAppointment: Appointment = {
  id: "appointment1",
  patientId: "patient1",
  doctorId: "doctor1",
  date: "2024-07-15",
  time: "10:00 AM",
  reason: "Routine check-up",
  status: "pending",
};

export const exampleMessage: Message = {
  id: "message1",
  content: "Hello, I have a question about my medication.",
  senderId: "patient1",
  receiverId: "doctor1",
  timestamp: "2024-06-23T15:30:00Z",
};
