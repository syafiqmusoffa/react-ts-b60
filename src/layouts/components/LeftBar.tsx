import { NavLink } from "react-router-dom";

// Import gambar dari assets/img
import HomeIcon from "../../assets/img/home.png";
import SearchIcon from "../../assets/img/search.png";
import HeartIcon from "../../assets/img/heart.png";
import UserIcon from "../../assets/img/user.png";
import CreateDialog from "@/components/dialog/CreateDialog";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/stores/auth";

function LeftBar() {
  const { clearUser } = useUserStore();
  return (
    <div className=" w-1/5 left-0">
      <div className="left-bar fixed w-70">
        <p className="title-form text-5xl font-extrabold">Circle</p>
        <Button className="bg-transparent justify-start hover:bg-gray-700 transition duration-300 ease-in-out">
          <NavLink to="/" className="icon-kiri">
            <img src={HomeIcon} alt="Home" width={20} height={20} />
            <p className="text-white">Home</p>
          </NavLink>
        </Button>
        <Button className="bg-transparent justify-start hover:bg-gray-700 transition duration-300 ease-in-out">
          <NavLink to="/search" className="icon-kiri">
            <img src={SearchIcon} alt="Search" width={20} height={20} />
            <p className="text-white">Search</p>
          </NavLink>
        </Button>
        <Button className="bg-transparent justify-start hover:bg-gray-700 transition duration-300 ease-in-out">
          <NavLink to="/follow" className="icon-kiri">
            <img src={HeartIcon} alt="Follows" width={20} height={20} />
            <p className="text-white">Follows</p>
          </NavLink>
        </Button>
        <Button className="bg-transparent justify-start hover:bg-gray-700 transition duration-300 ease-in-out">
          <NavLink to="/profile" className="icon-kiri">
            <img src={UserIcon} alt="Profile" width={20} height={20} />
            <p className="text-white">Profile</p>
          </NavLink>
        </Button>
        <CreateDialog />
      </div>
      <Button
        className="fixed -bottom-0 mb-3  left-4 bg-gray-800 cursor-pointer"
        onClick={clearUser}
      >
        Logout
      </Button>
    </div>
  );
}

export default LeftBar;
