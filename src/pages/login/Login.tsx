import React from "react";
import { useForm } from "react-hook-form";
import LoginRequestDTO from "../../dtos/LoginRequestDTO";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../../services/authentication/Authentication";
import store from "../../config/storage/IonicStorage";

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
    <div className="h-full flex flex-col items-center justify-center">
      <form
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col "
      >
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <input type="submit" />
      </form>
      <button className="mt-4">
        <Link to="/forgot-password">Forgot Password</Link>
      </button>
      <button className="mt-4">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default LoginPage;
