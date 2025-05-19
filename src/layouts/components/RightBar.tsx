import EditDialog from "@/components/dialog/EditDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";

function RightBar() {
  return (
    <div className="w-1/5 right-0 right">
      <div className="fixed p-5">
        <div className="bg-gray-800 p-4 rounded-lg ">
          <div className="relative w-full mb-6">
            {/* Background */}
            <div className=" h-20 bg-gradient-to-r from-green-200 to-yellow-300 rounded-lg"></div>
            {/* Foto Profil */}
            <Avatar className="absolute -bottom-6 left-4 w-16 h-16">
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

        {/* Suggested Users */}
        <div className="mt-5 bg-gray-800 p-4 rounded-lg">
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
              <button className="bg-white text-sm  px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-700 duration-200">
                Follow
              </button>
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
              <button className="bg-white text-sm px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-700 duration-200">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 bg-gray-800 p-4 rounded-lg">
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
