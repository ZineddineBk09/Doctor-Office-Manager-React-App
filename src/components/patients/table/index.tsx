import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../ui/table";
import { Badge } from "../../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import DeleteDialog from "../../shared/delete";
import EditDialog from "../dialogs/edit";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../../../features/patientSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../store";

const PatientsTable = () => {
  const dispatch: AppDispatch = useDispatch();
  const { patients, status, error } = useSelector(
    (state: RootState) => state.patients
  );

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  const columns = [
    {
      title: "Name",
      key: "ame",
      className: "",
    },
    {
      title: "Phone",
      key: "phone",
      className: "hidden sm:table-cell",
    },
    {
      title: "Address",
      key: "address",
      className: "hidden md:table-cell",
    },
    {
      title: "Date of Birth",
      key: "dateOfBirth",
      className: "hidden md:table-cell",
    },
    {
      title: "Gender",
      key: "gender",
      className: "hidden sm:table-cell",
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
        {patients?.map((patient) => (
          <TableRow key={patient.id}>
            <TableCell>
              <div className="font-medium">
                {patient.profile.firstName + " " + patient.profile.lastName}
              </div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                {patient.email}
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              {patient.profile.phone}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {patient.profile.address}
            </TableCell>
            <TableCell className="">{patient.profile.dateOfBirth}</TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge className="text-xs" variant="secondary">
                {patient.profile.gender}
              </Badge>
            </TableCell>

            <TableCell className="text-right space-x-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DeleteDialog handleDelete={() => {}} data={patient} />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <span>Delete</span>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <EditDialog patient={patient} />
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

export default PatientsTable;
