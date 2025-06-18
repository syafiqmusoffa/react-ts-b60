import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

import { useLogin } from "@/hooks/use-login";
import LoginSchema, { LoginSchemaType } from "@/utils/schemas/AuthTypes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useAuth } from "../connection/contexts/AuthContext";
function LoginForm() {
  const navigate = useNavigate();
  const { login, isAuth } = useAuth();
  const { mutateLogin, isPending } = useLogin();
  if (isAuth) {
    navigate("/");
  }

  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    await mutateLogin(data); // result.token assumed

    login(); // update context
    navigate("/");
  };
  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="p-8 flex items-center justify-center min-h-screen">
        <div className="border p-10 rounded-3xl w-full max-w-md ">
          <p className="title-form text-6xl font-extrabold text-center">
            Circle
          </p>
          <p className="title-order text-center text-xl mb-7">
            Login to Circle
          </p>
          <div className="flex flex-col gap-4">
            <Input
              className="form-input w-full border-2 p-1 rounded-2xl border-gray-500 text-m text-white"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <Input
              className="form-input w-full border-2 p-1 rounded-2xl border-gray-500 text-m text-white"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <NavLink to="/forgot" className="ask-acc text-sm">
              Forgot Password?
            </NavLink>
            <Button
              className="form-button-order bg-green-800 hover:bg-green-500"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Logging in..." : "Submit"}
            </Button>
            <p className="text-white">
              Register?{" "}
              <NavLink to="/register" className="title-order">
                here
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
