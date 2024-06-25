import {
  User,
  UserProfile,
  Doctor,
  Patient,
  MedicalHistory,
  Appointment,
  Message,
  Chat,
} from "../interfaces";

const fakeDoctors: Doctor[] = [
  {
    id: "d1",
    email: "dr.smith@example.com",
    profile: {
      firstName: "Anna",
      lastName: "Smith",
      phone: "555-1234",
      address: "123 Health St, Wellville",
      dateOfBirth: "1970-05-14",
      gender: "female",
    },
    specialty: "Cardiology",
    yearsOfExperience: 20,
    bio: "Experienced cardiologist with a passion for patient care.",
  },
  {
    id: "d2",
    email: "dr.jones@example.com",
    profile: {
      firstName: "John",
      lastName: "Jones",
      phone: "555-5678",
      address: "456 Healthy Ave, Fit City",
      dateOfBirth: "1965-11-22",
      gender: "male",
    },
    specialty: "Neurology",
    yearsOfExperience: 25,
    bio: "Neurologist dedicated to treating disorders of the nervous system.",
  },
];

const fakePatients: Patient[] = [
  {
    id: "p1",
    email: "jane.doe@example.com",
    profile: {
      firstName: "Jane",
      lastName: "Doe",
      phone: "555-8765",
      address: "789 Patient Rd, Care Town",
      dateOfBirth: "1985-04-10",
      gender: "female",
    },
    medicalHistory: [
      {
        id: "mh1",
        condition: "Hypertension",
        dateDiagnosed: "2015-03-01",
        treatment: "Medication and lifestyle changes",
      },
      {
        id: "mh2",
        condition: "Asthma",
        dateDiagnosed: "2010-06-20",
        treatment: "Inhalers and avoiding triggers",
      },
    ],
  },
  {
    id: "p2",
    email: "john.doe@example.com",
    profile: {
      firstName: "John",
      lastName: "Doe",
      phone: "555-4321",
      address: "321 Care Blvd, Health City",
      dateOfBirth: "1990-08-15",
      gender: "male",
    },
    medicalHistory: [
      {
        id: "mh3",
        condition: "Diabetes",
        dateDiagnosed: "2012-11-05",
        treatment: "Insulin and dietary changes",
      },
    ],
  },
];

const fakeAppointments: Appointment[] = [
  {
    id: "a1",
    patient: fakePatients[0],
    doctorId: fakeDoctors[0].id,
    date: "2024-07-15",
    time: "10:00 AM",
    reason: "Routine check-up",
    status: "pending",
  },
  {
    id: "a2",
    patient: fakePatients[1],
    doctorId: fakeDoctors[1].id,
    date: "2024-07-16",
    time: "02:00 PM",
    reason: "Follow-up for diabetes management",
    status: "accepted",
  },
  {
    id: "a3",
    patient: fakePatients[0],
    doctorId: fakeDoctors[1].id,
    date: "2024-07-17",
    time: "09:00 AM",
    reason: "Neurological evaluation",
    status: "rejected",
  },
];

const fakeMessages: Message[] = [
  {
    id: "m1",
    content: "Hello, I have a question about my medication.",
    senderId: fakePatients[0].id,
    receiverId: fakeDoctors[0].id,
    timestamp: "2024-06-23T15:30:00Z",
  },
  {
    id: "m2",
    content: "Can I reschedule my appointment?",
    senderId: fakePatients[1].id,
    receiverId: fakeDoctors[1].id,
    timestamp: "2024-06-24T10:00:00Z",
  },
  {
    id: "m3",
    content: "Your test results are available.",
    senderId: fakeDoctors[0].id,
    receiverId: fakePatients[0].id,
    timestamp: "2024-06-25T08:45:00Z",
  },
];

const fakeChats: Chat[] = [
  {
    id: "chat1",
    patientId: fakePatients[0].id,
    messages: [
      {
        id: "m1",
        content: "Hello, I have a question about my medication.",
        senderId: fakePatients[0].id,
        receiverId: fakeDoctors[0].id,
        timestamp: "2024-06-23T15:30:00Z",
      },
      {
        id: "m3",
        content: "Your test results are available.",
        senderId: fakeDoctors[0].id,
        receiverId: fakePatients[0].id,
        timestamp: "2024-06-25T08:45:00Z",
      },
    ],
  },
  {
    id: "chat2",
    patientId: fakePatients[1].id,
    messages: [
      {
        id: "m2",
        content: "Can I reschedule my appointment?",
        senderId: fakePatients[1].id,
        receiverId: fakeDoctors[1].id,
        timestamp: "2024-06-24T10:00:00Z",
      },
    ],
  },
];

export { fakeDoctors, fakePatients, fakeAppointments, fakeMessages, fakeChats };


