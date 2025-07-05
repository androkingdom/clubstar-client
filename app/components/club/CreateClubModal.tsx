import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CreateClubForm } from "./CreateClubForm";

export function CreateClubModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Create a Club
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create a Club</DialogTitle>
          <DialogDescription>
            Give your club a name and identity.
          </DialogDescription>
        </DialogHeader>

        {/* 👇 Clean and tidy inside dialog */}
        <CreateClubForm />
      </DialogContent>
    </Dialog>
  );
}
