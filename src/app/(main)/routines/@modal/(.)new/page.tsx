import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import RoutineForm from "@/features/climb-routines/components/routine-form";

import { icons } from "@/features/climb-routines/data/icons";

export default function NewRoutineModalPage() {
  return (
    <DialogContent className="group max-w-md">
      <DialogHeader className="sr-only">
        <DialogTitle>Create new routine modal</DialogTitle>
        <DialogDescription>
          Provide a name, description and select an icon for your routine
        </DialogDescription>
      </DialogHeader>
      <RoutineForm icons={icons} />
    </DialogContent>
  );
}
