import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../services/authentication/Authentication";
import { Link, useHistory } from "react-router-dom";
import ModalIsLoading from "../../components/modalIsLoading/ModalIsLoading";
import RegisterGetDTO from "../../dtos/RegisterGetDTO";
import RegisterPostDTO from "../../dtos/RegisterPostDTO";
import toast from "react-hot-toast";

type Props = {};

const RegisterPage = (props: Props) => {
  const{check,setCheck} = React.useState<boolean>(true)
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPostDTO>();
  const router = useHistory();
  const handleCheck = () =>{
    setCheck(false)
  }
  const handleOnSubmit = async (data: RegisterPostDTO): Promise<void> => {
    setIsLoading(true);
    await registerUser(data)
      .then(async (res) => {
        toast.success("Đăng ký thành công");
        router.push("/login");
      })
      .catch((err) => {
        toast.error("Đăng ký thất bại");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="relative h-full flex flex-col items-center justify-center">
      {isLoading ? (
        <ModalIsLoading />
      ) : (
        <>
          <form
            method="post"
            onSubmit={handleSubmit(handleOnSubmit)}
            className="grid gap-5 w-full p-4"
          >
            <h1 className="text-2xl font-bold">Create Your Account</h1>
            <div className="flex items-center border border-slate-400 p-2 rounded-md">
              <input
                className="bg-black outline-none p-0.5 w-full border border-transparent"
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
            </div>
            {errors.firstName && <span>This field is required</span>}
            <div className="flex items-center border border-slate-400 p-2 rounded-md">
              <input
                className="bg-black outline-none p-0.5 w-full border border-transparent"
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
            </div>
            {errors.lastName && <span>This field is required</span>}
            <div className="flex items-center border border-slate-400 p-2 rounded-md">
              <input
                className="bg-black outline-none p-0.5 w-full border border-transparent"
                type="tel"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
              />
            </div>
            {errors.phone && <span>This field is required</span>}
            <div className="flex items-center border border-slate-400 p-2 rounded-md">
              <input
                className="bg-black outline-none p-0.5 w-full border border-transparent"
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && <span>This field is required</span>}
            <div className="flex items-center border border-slate-400 p-2 rounded-md">
              <input
                className="bg-black outline-none p-0.5 w-full border border-transparent"
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            {errors.password && <span>This field is required</span>}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-10 h-10" />I would like to
              receive newsletters and other promotional information
            </div>
            <input
              type="submit"
              value={"Sign Up"}
              className="bg-red-500 rounded-md p-2 border border-transparent"
            />
          </form>
          <div className="fixed bottom-4">
            Already have account?{" "}
            <Link to={"/login"} className="font-bold">
              Log in
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default RegisterPage;
