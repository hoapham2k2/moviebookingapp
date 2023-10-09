import React from "react";
import RegisterRequestDTO from "../../dtos/RegisterRequestDTO";
import { useForm } from "react-hook-form";
import { registerUser } from "../../services/authentication/Authentication";

type Props = {};

const RegisterPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequestDTO>();

  const handleOnSubmit = async (data: RegisterRequestDTO) => {
    await registerUser(data)
      .then((res) => {
        console.log("Register Success");
      })
      .catch((err) => {
        console.log("Register Failed");
      });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <form
        method="post"
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && <span>This field is required</span>}
        <input
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <span>This field is required</span>}

        <input
          type="tel"
          placeholder="Phone Number"
          {...register("phone", { required: true })}
        />
        {errors.phone && <span>This field is required</span>}

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
    </div>
  );
};

export default RegisterPage;
