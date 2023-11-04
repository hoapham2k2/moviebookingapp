import supabase from "../../config/supabase/supabase";
import store from "../../config/storage/IonicStorage";

export const DeleteFavourite = async (movie_id: String) => {
  const value = await store.get("myUser");

  const { error } = await supabase
    .from("tbl_favourite")
    .delete()
    .eq("user_id", value["id"])
    .eq("movie_id", movie_id);
};
