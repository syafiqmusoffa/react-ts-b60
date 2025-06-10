import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import EditDialog from "./dialog/EditDialog";
import { useLocation } from "react-router-dom";
import { ThreadProps } from "@/types/thread";

interface Props {
  thread: ThreadProps;
}

function ProfileComp() {
    const location = useLocation()
    const isNotProfilePage = ['/profile'].includes(location.pathname)
  return (
    <main>
      <div className="bg-[#2a2b2a] p-4 mt-3 rounded-lg ">
        <div className="relative w-full mb-6">
          {/* Background */}
          <div
            className={`${
              isNotProfilePage ? "h-40" : "h-28"
            } bg-gradient-to-r from-green-200 to-yellow-300 rounded-lg transition-all duration-300`}
          ></div>
          {/* Foto Profil */}
          <Avatar className="absolute -bottom-6 left-4 w-20 h-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-start mt-2 font-bold text-2xl text-white">
              Syafiq
            </h2>
            <p className="text-start text-sm text-gray-500">@Syafiq</p>
            <p className="text-start text-sm text-white italic">
              "To Infinity & Beyond"
            </p>
          </div>

          <EditDialog />
        </div>
      </div>
    </main>
  );
}

export default ProfileComp;
