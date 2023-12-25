import React from "react";
import { forgotPassword } from "../../services/authentication/Authentication";
import toast from "react-hot-toast";
import { useHistory } from "react-router";

type Props = {};

const ForgotPasswordPage = (props: Props) => {
  const [check, setCheck] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const router = useHistory();
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await forgotPassword(email)
      .then((res) => {
        console.log(res);
        toast.success("Check your email to reset password");
        
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  const handleCheck = () => {
    check ? console.log(check) : console.log(check);
    setCheck(true);
  };
  return (
    <div className="w-full h-full">
      <div className="h-20 px-4 py-8 flex justify-start items-center">
        <h1 className="text-xl uppercase font-semibold">Forgot Password</h1>
      </div>
      <div className="w-full h-full  flex justify-center items-center">
        <form
          className="px-4 w-full flex flex-col gap-4"
          onSubmit={handleOnSubmit}
        >
          <input
            type="text"
            placeholder="Input your email to reset password"
            className="w-full h-10 border rounded-md px-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="submit"
            value="Submit"
            className="w-full h-10 border rounded-md"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
