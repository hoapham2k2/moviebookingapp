import supabase from "../../config/supabase/supabase";

/* 
  <summary>
    Modified by: Hoa Pham
    Modified on: 28-Dec-2023
    Description: Get user profile from database
  </summary>
  <param name="userId">the user id to get profile</param>
  <returns>Promise<any></returns>
*/

export default async function GetUserProfile(userId: string) {
  const { data, error } = await supabase
    .from("tbl_user")
    .select("*")
    .eq("id", userId);
  if (data) return data;
  if (error) throw error;
}
