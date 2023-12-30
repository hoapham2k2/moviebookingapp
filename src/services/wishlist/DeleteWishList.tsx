import supabase from "../../config/supabase/supabase";
import store from "../../config/storage/IonicStorage";
import { CURRENT_USER } from "../../utils/SharedValues";

export const DeleteFavourite = async (movie_id: String) => {
  const value = await store.get(CURRENT_USER);

  const { error } = await supabase
    .from("tbl_favourite")
    .delete()
    .eq("user_id", value["id"])
    .eq("movie_id", movie_id);
};
