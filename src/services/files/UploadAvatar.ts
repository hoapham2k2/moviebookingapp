import toast from "react-hot-toast";
import { StorageGetItem } from "../../config/storage/IonicStorage";
import supabase from "../../config/supabase/supabase";
import { CURRENT_USER } from "../../utils/SharedValues";
import { boolean } from "yargs";
import GetUserID from "../../utils/GetUserID";

export default async function UploadAvatar(file: File): Promise<any> {
  const user = await GetUserID();
  console.log("user id: ", user);

  try {
    await supabase.storage
      .from("avatars")
      .upload(`${user}`, file)
      .then((res) => {
        if (res.error) {
          toast.error("Upload avatar failed");
          throw res.error;
        } else {
          toast.success("Upload avatar successfully");
        }
      });
  } catch (err: any) {
    console.log("error when upload avatar: ", err.message);

    await supabase.storage
      .from("avatars")
      .remove([`${user}`])

      .then((res) => {
        if (res.error) {
          toast.error("Remove avatar failed");
          throw res.error;
        } else {
          toast.success("Remove avatar successfully");
        }
      });

    await supabase.storage
      .from("avatars")
      .upload(`${user}`, file)
      .then((res) => {
        if (res.error) {
          toast.error("Upload avatar failed");
          throw res.error;
        } else {
          toast.success("Upload avatar successfully");
        }
      });
  }
}
