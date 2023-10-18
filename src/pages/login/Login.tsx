import React from "react";
import { useForm } from "react-hook-form";
import LoginRequestDTO from "../../dtos/LoginRequestDTO";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../../services/authentication/Authentication";
import store from "../../config/storage/IonicStorage";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

type Props = {};

const LoginPage = (props: Props) => {
  // react-hook-form to validate form
  const router = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequestDTO>({
    defaultValues: {},
  });

  const onSubmit = async (data: LoginRequestDTO) => {
    await loginUser(data)
      .then((res) => {
        console.log(res);
        store.set("token", res.session.access_token);
        store.set("refresh_token", res.session.refresh_token);
        store.set("user_id", res.user.id);
      })
      .then(() => {
        router.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative h-full flex flex-col items-center justify-center">
      <form
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-5 w-full p-4"
      >
        <h1 className="text-2xl font-semibold">Welcome back, Kevin</h1>
        <p>Please log in</p>
        <div className="flex items-center border border-slate-400 p-2 rounded-md">
          <EnvelopeIcon className="w-6 h-6 mr-2" />
          <input
            type="text"
            placeholder="Email"
            className="bg-black outline-none p-0.5 w-full border border-transparent"
            {...register("email", { required: true })}
          />
        </div>
        {errors.email && <span>This field is required</span>}
        <div className="flex items-center border border-slate-400 p-2 rounded-md">
          <LockClosedIcon className="w-6 h-6 mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="bg-black outline-none p-0.5 w-full border border-transparent"
            {...register("password", { required: true })}
          />
        </div>
        <Link to="/forgot-password">Forgot password?</Link>
        {errors.password && <span>This field is required</span>}
        <input
          type="submit"
          value={"Sign In"}
          className="bg-red-500 rounded-md p-2"
        />
      </form>

      <div className="fixed bottom-4">
        Don't have account?{" "}
        <Link to="/register" className="font-bold">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
