import { PenLineIcon } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { useState } from "react";
import { toast } from "sonner";

function EditDialog({ patient }: { patient: any }) {
  const handleUpdate = async () => {
    toast.success("Appointment updated successfully");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
          <PenLineIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Edit patient</DialogTitle>
          <DialogDescription>
            Make changes to patient here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {[].map((field) => {
            return (
              <div className="grid grid-cols-4 items-center gap-4" key={field}>
                <Label htmlFor={field} className="text-right">
                  {field}
                </Label>
                <Input
                  id={field}
                  // @ts-ignore
                  defaultValue={fields[field]}
                  onChange={() => {}}
                  disabled={field === "patientname"}
                  className="col-span-3"
                />
              </div>
            );
          })}
        </div>
        <DialogFooter className="">
          <DialogClose>
            <Button variant="outline" id="close">
              Close
            </Button>
          </DialogClose>
          <Button type="submit" onClick={handleUpdate}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditDialog;
