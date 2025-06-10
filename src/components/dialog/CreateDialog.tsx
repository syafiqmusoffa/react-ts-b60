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


function CreateDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="cursor-pointer text-white border-none bg-green-600 hover:bg-green-800 hover:text-white"
        >
          Create?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-none bg-white">
        <div className="grid py-3 text-white">
          <Input
            id="content"
            placeholder="what is happening?"
            className="border-none text-white"
          />
        </div>
        <DialogFooter>
          <Input type="file" className="border-none text-gray-600" />
          <Button
            type="submit"
            className="cursor-pointer border-none bg-green-600 hover:bg-green-800 hover:text-white"
          >
            create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateDialog;
