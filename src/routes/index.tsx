import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Register from "./Register";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import PassReset from "./PassReset";
import ProtectedRuoteLayout from "./ProtectedRuote";
import Profile from "./Profile";
import Search from "./Search";
import Follows from "./Follows";
import DetailThread from "./DetailThread";

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
        path: "/thread",
        Component: DetailThread,
      },
    ],
  },
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
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
