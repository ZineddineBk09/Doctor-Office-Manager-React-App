import { Appointment, Patient } from "../../../interfaces";

export const getAppointmentsByMonth = (appointments: Appointment[]): any[] => {
  const result: { [key: string]: { name: string; appointment: number } } = {};

  appointments.forEach((appointment) => {
    const date = new Date(appointment.date);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const key = `${month}-${year}`;

    if (!result[key]) {
      result[key] = { name: month.slice(0, 3), appointment: 0 };
    }

    result[key].appointment += 1;
  });

  // return the values, and trim last elements {month: 'Invalid Date', year: NaN, appointment: 1}
  return Object.values(result).slice(0, -1);
};

export const getAppointmentsPatientsOverTime = (
  appointments: Appointment[],
  patients: Patient[]
): any => {
  const formatData = (date: string): string => {
    const parsedDate = new Date(date);
    return parsedDate.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
  };

  const monthOrder = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const sortData = (
    data: { x: string; y: number }[]
  ): { x: string; y: number }[] => {
    return data.sort((a, b) => {
      const [aMonth, aYear] = a.x.split(" ");
      const [bMonth, bYear] = b.x.split(" ");

      const aMonthIndex = monthOrder.indexOf(aMonth);
      const bMonthIndex = monthOrder.indexOf(bMonth);

      if (aYear === bYear) {
        return aMonthIndex - bMonthIndex;
      }
      return parseInt(aYear) - parseInt(bYear);
    });
  };

  const patientsResults = patients.reduce((acc, patient) => {
    const dateDiagnosed = formatData(patient.medicalHistory[0].dateDiagnosed);
    if (!acc[dateDiagnosed]) {
      acc[dateDiagnosed] = { x: dateDiagnosed, y: 0 };
    }
    acc[dateDiagnosed].y += 1;
    return acc;
  }, {} as { [key: string]: { x: string; y: number } });

  const appointmentsResults = appointments.reduce((acc, appointment) => {
    const date = formatData(appointment.date);
    if (!acc[date]) {
      acc[date] = { x: date, y: 0 };
    }
    acc[date].y += 1;
    return acc;
  }, {} as { [key: string]: { x: string; y: number } });

  const sortedPatientsResults = sortData(Object.values(patientsResults));
  const sortedAppointmentsResults = sortData(
    Object.values(appointmentsResults)
  );

  return [
    {
      id: "Patients",
      data: sortedPatientsResults.splice(1, 13),
    },
    {
      id: "Appointments",
      data: sortedAppointmentsResults.splice(0, 12),
    },
  ];
};

export const getAppointmentsByStatus = (appointments: Appointment[]) => {
  return [
    {
      id: "Pending Appointments",
      label: "Pending",
      value: appointments.filter((a) => a.status === "pending").length,
      color: "#2563eb",
    },
    {
      id: "Accepted Appointments",
      label: "Accepted",
      value: appointments.filter((a) => a.status === "accepted").length,
      color: "#10b981",
    },
    {
      id: "Rejected Appointments",
      label: "Rejected",
      value: appointments.filter((a) => a.status === "rejected").length,
      color: "#ef4444",
    },
  ];
};