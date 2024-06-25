import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { File as FileIcon, ListFilter as ListFilterIcon } from "lucide-react";
import { fakeAppointments } from "../../data/examples";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import DeleteDialog from "../shared/delete";
import EditDialog from "./dialogs/edit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchAppointments } from "../../features/appointmentSlice";

export default function Appointments() {
  return (
    <>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
          <div className="ml-auto">
            <Button>Create New Appointment</Button>
          </div>
          <div className="flex items-center">
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 text-sm"
                  >
                    <ListFilterIcon className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Fulfilled
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                <FileIcon className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Export</span>
              </Button>
            </div>
          </div>
          <Card x-chunk="dashboard-05-chunk-3">
            <CardHeader className="px-7">
              <CardTitle>Appointments</CardTitle>
              <CardDescription>
                Recent appointments from your clinic.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AppointmentsTable />
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}

const AppointmentsTable = () => {
  const dispatch: AppDispatch = useDispatch();
  const { appointments, status, error } = useSelector(
    (state: RootState) => state.appointments
  );

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const columns = [
    {
      title: "Patient",
      key: "patient",
      className: "",
    },
    {
      title: "Reason",
      key: "reason",
      className: "",
    },
    {
      title: "Date",
      key: "date",
      className: "hidden md:table-cell",
    },
    {
      title: "Time",
      key: "time",
      className: "hidden md:table-cell",
    },
    {
      title: "Status",
      key: "status",
      className: "hidden lg:table-cell",
    },
    {
      title: "Actions",
      key: "actions",
      className: "text-right",
    },
  ];

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.key} className={column.className}>
              {column.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments.map((appointment) => (
          <TableRow key={appointment.id}>
            <TableCell>
              <div className="font-medium">
                {appointment.patient.profile.firstName +
                  " " +
                  appointment.patient.profile.lastName}
              </div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                {appointment.patient.profile.phone}
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              {appointment.reason}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {appointment.date}
            </TableCell>
            <TableCell className="">{appointment.time}</TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge className="text-xs" variant="secondary">
                {appointment.status}
              </Badge>
            </TableCell>

            <TableCell className="text-right space-x-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DeleteDialog handleDelete={() => {}} data={appointment} />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <span>Delete</span>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <EditDialog appointment={appointment} />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <span>Edit</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
