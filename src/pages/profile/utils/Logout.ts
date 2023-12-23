import toast from "react-hot-toast";
import store from "../../../config/storage/IonicStorage";
import { logoutUser } from "../../../services/authentication/Authentication";

export default async function handleLogOut() {
  console.log("start log out");
  await store.clear();
  await logoutUser()
    .then(() => {
      window.location.href = "/login";
    })
    .catch(() => {
      toast.error("Log out failed");
    });
}
