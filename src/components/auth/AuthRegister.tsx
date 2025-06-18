import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
function AuthRegister() {
  return (
    <body className="bg-[#1a1b1a]">
      <div className="p-8 flex items-center justify-center min-h-screen">
        <div className="border p-10 rounded-3xl w-full max-w-md">
          <p className="title-form text-6xl font-extrabold text-center">
            Circle
          </p>
          <p className="title-order text-center text-xl mb-7">
            Create account Circle
          </p>
          <div className="flex flex-col gap-4">
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
        </div>
      </div>
    </body>
  );
}

export default AuthRegister;
