import { useCreate } from "@/hooks/use-create-thread";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { useRef } from "react";

function CreateDialog() {
  const { dataCreate, isPending, mutateCreate, setContent, content, handleFileChange } = useCreate()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutateCreate();
  };
  const fileInputRef = useRef<HTMLInputElement | null>(null);
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
        <form onSubmit={handleSubmit}>
          <div className="grid py-3 text-black">
            <Input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What is happening?!"
            />
          </div>
          <DialogFooter>
            <Input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border-none text-gray-600"
            />
            <Button
              type="submit"
              disabled={isPending}
              className="cursor-pointer border-none bg-green-600 hover:bg-green-800 hover:text-white"
            >
              {isPending ? "wait..." : "create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateDialog;
