import EditDialog from "@/components/dialog/EditDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import ProfileComp from "@/components/Profile";

function RightBar() {
  const location = useLocation()
  const hideProfile = ['/profile'].includes(location.pathname)
  return (
    <div className="w-1/4 right-0 right border-l border-black">
      <div className="fixed p-5">
        {!hideProfile &&
          <ProfileComp />
        }
        {/* Suggested Users */}
        <div className="mt-5 bg-[#2a2b2a] p-4 rounded-lg">
          <h3 className="font-bold text-white">Suggested for you</h3>
          <div className="mt-2 space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-3 items-center">
                <Avatar className=" w-8 h-8 ">
                  <AvatarImage
                    src="https://picsum.photos/id/237/200/300"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-white">Oru the Cat</p>
              </div>
              <Button className="cursor-pointer text-white border-none bg-[#1f1f1f] hover:bg-[#272827] hover:text-white ">
                Follow
              </Button>
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex gap-x-3 items-center">
                <Avatar className=" w-8 h-8 ">
                  <AvatarImage
                    src="https://picsum.photos/id/237/200/300"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-white">Ziu Brodi</p>
              </div>
              <Button className="cursor-pointer text-white border-none bg-[#1f1f1f] hover:bg-[#272827] hover:text-white ">
                Follow
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-5 bg-[#2a2b2a] p-4 rounded-lg">
          <div className="text-white flex items-center gap-x-2">
            <p>Developed by Syafiq</p>
            <p>●</p>
            <button className="cursor-pointer hover:text-gray-400 duration-200">
              <FaGithub />
            </button>
            <button className="cursor-pointer hover:text-gray-400 duration-200">
              <CiLinkedin />
            </button>
            <button className="cursor-pointer hover:text-gray-400 duration-200">
              <FaFacebook />
            </button>
            <button className="cursor-pointer hover:text-gray-400 duration-200">
              <BiLogoInstagramAlt />
            </button>
          </div>
          <div className="text-gray-500 flex items-center gap-x-2 text-xs">
            <p>Powered by DumbWays Indonesia ● #1CodingBootcamp</p>
          </div>
        </div>
      </div>
      {/* Profil */}
    </div>
  );
}

export default RightBar;
