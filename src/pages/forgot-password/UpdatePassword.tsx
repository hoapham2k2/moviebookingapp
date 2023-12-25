import React from "react";
import { updatePasswordForUser } from "../../services/authentication/Authentication";
import toast from "react-hot-toast";
import ModalIsLoading from "../../components/modalIsLoading/ModalIsLoading";

type Props = {};

const UpdatePassword = (props: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isUpdate, setIsUpdate] = React.useState<boolean>(false);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUpdate(true);
    try {
      const data = await updatePasswordForUser(email, password);
      toast.success("Update password successfully");
      console.log(data);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsUpdate(false);
    }
  };

  return (
    <div>
      {isUpdate ? (
        <ModalIsLoading />
      ) : (
        <div className="w-full h-full">
          <div className="h-20 px-4 py-8 flex justify-start items-center">
            <h1 className="text-xl uppercase font-semibold">Update Password</h1>
          </div>
          <div className="w-full h-full  flex justify-center items-center">
            <form
              className="px-4 w-full flex flex-col gap-4"
              onSubmit={handleOnSubmit}
            >
              <input
                type="text"
                placeholder="Input your email to update password"
                className="w-full h-10 border rounded-md px-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Input your new password"
                className="w-full h-10 border rounded-md px-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="submit"
                value="Submit"
                className="w-full h-10 border rounded-md"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
