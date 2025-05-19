import { Button } from "../ui/button";

function ResetPass() {
  return (
    <div className="form-auth">
      <p className="title-form text-6xl font-extrabold">Circle</p>
      <p className="title-order text-xl">Reset Password</p>

      <input
        className="form-input w-full border-2 p-1 rounded-2xl border-gray-500 text-m text-white"
        type="password"
        name="password"
        id="password"
        // onChange={handleChange}
        placeholder="New Password"
      />
      <input
        className="form-input w-full border-2 p-1 rounded-2xl border-gray-500 text-m text-white"
        type="password"
        name="password"
        id="password"
        // onChange={handleChange}
        placeholder="Confirm New Password"
      />
      <Button className="form-button-order bg-green-800" type="submit">
        Submit
      </Button>
    </div>
  );
}

export default ResetPass;
