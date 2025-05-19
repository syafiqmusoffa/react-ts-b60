import EditDialog from "@/components/dialog/EditDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

function Profile() {
  return (
    <main className="p-3 h-265">
      <h1 className="pt-3 text-4xl text-gray-400">Profile</h1>
      <div className="bg-gray-800 p-4 mt-3 rounded-lg ">
        <div className="relative w-full mb-6">
          {/* Background */}
          <div className=" h-50 bg-gradient-to-r from-green-200 to-yellow-300 rounded-lg"></div>
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

export default Profile;
