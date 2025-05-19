import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

function AuthForgot() {
  return (
    <div className="form-auth">
      <p className="title-form text-6xl font-extrabold">Circle</p>
      <p className="title-order text-xl">Forgot Password</p>
      <input
        className="form-input w-full border-2 p-1 rounded-2xl border-gray-500 text-m text-white"
        type="text"
        name="email"
        id="email"
        // onChange={handleChange}
        placeholder="Email"
        required
      />
      <Button className="form-button-order bg-green-800" type="submit">
        Send Instruction
      </Button>
      <p className="text-white">
        Already have account?{" "}
        <NavLink to="/login" className="title-order">
          login
        </NavLink>
      </p>
    </div>
  );
}

export default AuthForgot;
