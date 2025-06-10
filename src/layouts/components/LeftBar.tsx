import { NavLink } from "react-router-dom";

// Import gambar dari assets/img
import HomeIcon from "../../assets/img/home.png";
import SearchIcon from "../../assets/img/search.png";
import HeartIcon from "../../assets/img/heart.png";
import UserIcon from "../../assets/img/user.png";
import CreateDialog from "@/components/dialog/CreateDialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/connection/contexts/AuthContext";


function LeftBar() {
  const { logout } = useAuth();

  function onLogout() {
    logout();
  }
  return (
    <div className=" w-3/14 left-0 border-r border-black ">
      <div className="left-bar fixed w-70">
        <p className="title-form text-5xl font-extrabold">Circle</p>
          <NavLink to="/" className="icon-kiri">
        <Button className="bg-transparent justify-start hover:bg-gray-700 transition duration-300 ease-in-out w-full cursor-pointer">
            <img src={HomeIcon} alt="Home" width={20} height={20} />
            <p className="text-white">Home</p>
        </Button>
          </NavLink>
          <NavLink to="/search" className="icon-kiri">
        <Button className="bg-transparent justify-start hover:bg-gray-700 transition duration-300 ease-in-out w-full cursor-pointer">
            <img src={SearchIcon} alt="Search" width={20} height={20} />
            <p className="text-white">Search</p>
        </Button>
          </NavLink>
          <NavLink to="/follow" className="icon-kiri">
        <Button className="bg-transparent justify-start hover:bg-gray-700 transition duration-300 ease-in-out w-full cursor-pointer">
            <img src={HeartIcon} alt="Follows" width={20} height={20} />
            <p className="text-white">Follows</p>
        </Button>
          </NavLink>
          <NavLink to="/profile" className="icon-kiri ">
        <Button className="bg-transparent justify-start hover:bg-gray-700 transition duration-300 ease-in-out w-full cursor-pointer">
            <img src={UserIcon} alt="Profile" width={20} height={20} />
            <p className="text-white">Profile</p>
        </Button>
          </NavLink>
        <CreateDialog />
      </div>
      <Button
        className="fixed -bottom-0 mb-3  left-4 bg-gray-800 cursor-pointer"
        onClick={() => {
          onLogout();
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default LeftBar;
