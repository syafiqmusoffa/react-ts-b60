import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext, useState } from "react";

import { useUserStore } from "@/stores/auth";

interface LoginFormState {
  username: string;
  email: string;
  password: string;
}

function LoginForm() {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  const [formState, setFormState] = useState<LoginFormState>({
    username: "not found",
    email: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.value);
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(`Halo ini data saya :`, formState);
    setUser(formState);
    navigate("/");
  };
  return (
    <form className="form-auth" onSubmit={handleSubmit}>
      <p className="title-form text-6xl font-extrabold">Circle</p>
      <p className="title-order text-xl">Login to Circle</p>
      <input
        className="form-input w-full border-2 p-1 rounded-2xl border-gray-500 text-m text-white"
        type="text"
        name="username"
        id="username "
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        className="form-input w-full border-2 p-1 rounded-2xl border-gray-500 text-m text-white"
        type="text"
        name="email"
        id="email "
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        className="form-input w-full border-2 p-1 rounded-2xl border-gray-500 text-m text-white"
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <NavLink to="/forgot" className="ask-acc text-sm">
        Forgot Password?
      </NavLink>
      <Button className="form-button-order bg-green-800" type="submit">
        Login
      </Button>
      <p className="text-white">
        Register?{" "}
        <NavLink to="/register" className="title-order">
          here
        </NavLink>
      </p>
    </form>
  );
}

export default LoginForm;
