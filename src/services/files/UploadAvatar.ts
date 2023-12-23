import supabase from "../../config/supabase/supabase";
import GetUserID from "../../utils/GetUserID";
import React from "react";

export default async function UploadAvatar(
  file: File,
  changeImgSrc: React.Dispatch<React.SetStateAction<string>>
): Promise<any> {
  const user = await GetUserID();
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(`${user}`, file, {
      upsert: true,
      contentType: "image/png", // server will infer the content type
    });

<<<<<<< HEAD
  if (error) {
    toast.error("update avatar failed");
    throw error;
  }

  if (data) {
    const data = await supabase.storage.from("avatars").getPublicUrl(`${user}`);
    if (data) {
      // @ts-ignore
      console.log(data.data.publicUrl);
      changeImgSrc(data.data.publicUrl);
      toast.success("update avatar success");
    }
=======
  try {
  const res = await supabase.storage
      .from("avatars")
      .upload(user, file,{upsert:true})
        
  return `https://wujwdhzvyjbytquaahdd.supabase.co/storage/v1/object/public/avatars/${res.data?.path}`;
    
  } catch (err: any) {
    console.log("error when upload avatar: ", err.message);
>>>>>>> main
  }
}
