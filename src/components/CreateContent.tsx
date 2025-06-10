import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AiOutlinePicture } from "react-icons/ai";
import { LuImagePlus } from "react-icons/lu";

function CreateContent() {
  const [image] = useState<string | null>(null);
  return (
    <div className=" ">
      <div className="p-4  flex items-center gap-3">
        <Avatar className=" w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <input
          type="text"
          placeholder="What is happening?!"
          className="bg-transparent flex-1 p-2  rounded-lg text-white"
        />
        <label className="cursor-pointer">
          <input type="file" className="hidden" />
          <div className="w-16 h-16 flex items-center justify-center ">
            {image ? (
              <img
                src={image}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <span className="text-gray-500 rounded-2xl">
                <LuImagePlus size={50} />
              </span>
            )}
          </div>
        </label>
        <button className="bg-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700 duration-200">
          Post
        </button>
      </div>
    </div>
  );
}

export default CreateContent;
