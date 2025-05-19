import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
function AuthRegister() {
  return (
    <main>
      <div className="form-auth">
        <p className="title-form text-6xl font-extrabold">Circle</p>
        <p className="title-order text-xl">Create account Circle</p>
        <input
          className="form-input w-full border-2 p-1 rounded-2xl border-gray-500 text-m text-white"
          type="text"
          name="username"
          id="username"
          // onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          className="form-input w-full border-2 p-1 rounded-2xl border-gray-500 text-m text-white"
          type="text"
          name="email"
          id="email"
          // onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className="form-input w-full border-2 p-1 rounded-2xl border-gray-500 text-m text-white"
          type="password"
          name="password"
          id="password"
          // onChange={handleChange}
          placeholder="Password"
          required
        />
        <Button className="form-button-order bg-green-800" type="submit">
          Submit
        </Button>
        <p className="text-white">
          Already have account?{" "}
          <NavLink to="/login" className="title-order">
            login
          </NavLink>
        </p>
      </div>
    </main>
  );
}

export default AuthRegister;
