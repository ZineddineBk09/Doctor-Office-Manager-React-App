export interface User {
  id: string;
  email: string;
  password?: string;
  role: "doctor" | "patient";
  profile: UserProfile;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  gender: "male" | "female";
}

export interface Doctor extends User {
  specialty: string;
  yearsOfExperience: number;
  bio: string;
}

export interface Patient extends User {
  medicalHistory: MedicalHistory[];
}

export interface MedicalHistory {
  id: string;
  condition: string;
  dateDiagnosed: string;
  treatment: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  reason: string;
  status: "pending" | "accepted" | "rejected";
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  timestamp: string;
}
