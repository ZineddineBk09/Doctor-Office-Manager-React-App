import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../../components/ui/card";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { fakeAppointments, fakeChats, fakePatients } from "../../data/examples";
import {
  Users as UsersIcon,
  CalendarDays as CalendarDaysIcon,
  MessagesSquare as MessagesSquareIcon,
} from "lucide-react";
import BarChart from "./charts/bar";
import LineChart from "./charts/line";
import {
  getAppointmentsByMonth,
  getAppointmentsByStatus,
  getAppointmentsPatientsOverTime,
} from "./data";
import PieChart from "./charts/pie";

export default function Dashboard() {
  const {
    patients,
    status: patientsStatus,
    error: patientsError,
  } = useSelector((state: RootState) => state.patients);
  const {
    appointments,
    status: appointmentsStatus,
    error: appointmentsError,
  } = useSelector((state: RootState) => state.appointments);

  const chats = fakeChats;

  const appointmentsByMonth = getAppointmentsByMonth(appointments);
  const appointmentsPatientsOverTime = getAppointmentsPatientsOverTime(
    appointments,
    patients
  );
  const appointmentsByStatus = getAppointmentsByStatus(appointments);

  console.log(fakePatients);
  console.log("=======================");

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Patients
              </CardTitle>
              <UsersIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{patients.length}</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Appointments
              </CardTitle>
              <CalendarDaysIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{appointments.length}</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Chats</CardTitle>
              <MessagesSquareIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {chats.reduce((acc, chat) => acc + chat.messages.length, 0)}
              </div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Patients & Appointments Over Time</CardTitle>
                <CardDescription>
                  A chart showing patients and appointments over time.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {appointmentsStatus === "loading" ||
              patientsStatus === "loading" ? (
                <div>Loading...</div>
              ) : appointmentsError || patientsError ? (
                <div>Error</div>
              ) : (
                <LineChart
                  className="aspect-[9/4]"
                  data={appointmentsPatientsOverTime}
                />
              )}
            </CardContent>
          </Card>
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Appointments by Month</CardTitle>
                <CardDescription>
                  A chart showing appointments over each month.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {appointmentsStatus === "loading" ? (
                <div>Loading...</div>
              ) : appointmentsError ? (
                <div>Error</div>
              ) : (
                <BarChart className="aspect-[9/4]" data={appointmentsByMonth} />
              )}
            </CardContent>
          </Card>
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Appointments Status</CardTitle>
                <CardDescription>
                  A chart showing appointments status.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <PieChart className="aspect-[9/4]" data={appointmentsByStatus} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
