import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function CreateDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer ">
          Create?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid py-3">
          <Input id="content" placeholder="what is happening?" />
        </div>
        <DialogFooter>
          <Input type="file" />
          <Button type="submit" className="cursor-pointer">
            create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateDialog;
