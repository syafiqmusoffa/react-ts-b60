import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "./About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import PassReset from "../pages/PassReset";
import ProtectedRuoteLayout from "./ProtectedRuote";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Follows from "../pages/Follows";
import DetailThread from "../pages/DetailThread";

let router = createBrowserRouter([
  {
    Component: ProtectedRuoteLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/search",
        Component: Search,
      },
      {
        path: "/follow",
        Component: Follows,
      },
      {
        path: "/thread/:id",
        Component: DetailThread,
      },
    ],
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/forgot",
    Component: ForgotPassword,
  },
  {
    path: "/reset",
    Component: PassReset,
  },
]);

export default router;
