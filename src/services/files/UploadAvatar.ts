import toast from "react-hot-toast";
import supabase from "../../config/supabase/supabase";
import GetUserID from "../../utils/GetUserID";

/* 
  <summary>
    Modified by: Hoa Pham
    Modified on: 28-Dec-2023
    Description: Upload avatar to database, change image source and set upload status
  </summary>
  <param name="file">the file to upload</param>
  <param name="changeImgSrc">the function to change image source</param>
  <param name="setUpload">the function to set upload status</param>
  <returns>Promise<any></returns>
*/


export default async function UploadAvatar(
  file: File,
  changeImgSrc: React.Dispatch<React.SetStateAction<string>>,
  setUpload: React.Dispatch<React.SetStateAction<boolean>>
): Promise<any> {
  setUpload(true);
  console.log("uploading avatar with file", file);
  const user = await GetUserID();
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(`${user}`, file, {
      upsert: true,
      contentType: "image/png", // server will infer the content type
    });
  setUpload(false);

  if (error) {
    toast.error("update avatar failed");
  }

  if (data) {
    console.log("data", data);
    const reader = new FileReader();
    reader.onload = (e) => {
      changeImgSrc(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    toast.success("update avatar success");
  }
}
