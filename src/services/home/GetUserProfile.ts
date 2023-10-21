import supabase from "../../config/supabase/supabase";
import RegisterGetDTO from "../../dtos/RegisterGetDTO";

export default async function GetUserProfile(userId: string) {
  const { data, error } = await supabase
    .from("tbl_user")
    .select("*")
    .eq("id", userId);

  if (data) return data;
  if (error) throw error;
}
