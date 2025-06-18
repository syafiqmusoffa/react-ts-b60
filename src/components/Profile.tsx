import { Avatar, AvatarFallback } from "./ui/avatar";
import EditDialog from "./dialog/EditDialog";
import { useLocation } from "react-router-dom";

import { useProfile } from "@/hooks/use-profile";

function ProfileComp() {
  const { data: profile, isLoading, isError } = useProfile();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !profile) return <div>Gagal mengambil profil</div>;

  const location = useLocation();
  const isNotProfilePage = ["/profile"].includes(location.pathname);
 

  return (
    
      <div className="bg-[#2a2b2a] p-4 mt-3 rounded-lg ">
        <div className="relative w-full mb-6">
          <div
            className={`${
              isNotProfilePage ? "h-40" : "h-28"
            } bg-gradient-to-r from-green-200 to-yellow-300 rounded-lg transition-all duration-300`}
          ></div>

          <Avatar className="absolute -bottom-6 left-4 w-20 h-20">
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.username}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <AvatarFallback>
                {profile.username?.slice(0, 2).toUpperCase() || "US"}
              </AvatarFallback>
            )}
          </Avatar>
        </div>
        <div className="flex justify-between ">
          <div className="flex flex-col ">
            <h2 className="text-start mt-2 font-bold text-2xl text-white">
              {profile?.name || "user"}
            </h2>
            <p className="text-start text-sm text-gray-500">
              @{profile?.username || "user"}
            </p>
            <p className="text-start text-sm text-white italic">
              {profile?.bio || "add your bio"}
            </p>
          </div>

          <EditDialog />
        </div>
      </div>
    
  );
}

export default ProfileComp;
