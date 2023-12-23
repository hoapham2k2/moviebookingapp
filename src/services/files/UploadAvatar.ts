import supabase from "../../config/supabase/supabase";
import GetUserID from "../../utils/GetUserID";

export default async function UploadAvatar(file: File): Promise<any> {
  const user = await GetUserID();
  console.log("user id: ", user);

  try {
  const res = await supabase.storage
      .from("avatars")
      .upload(user, file,{upsert:true})
        
  return `https://wujwdhzvyjbytquaahdd.supabase.co/storage/v1/object/public/avatars/${res.data?.path}`;
    
  } catch (err: any) {
    console.log("error when upload avatar: ", err.message);
  }
}
