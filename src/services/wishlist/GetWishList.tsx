import store from "../../config/storage/IonicStorage";
import supabase from "../../config/supabase/supabase";

//create a function with input value is movieId to insert data
export const GetWishList = async () => {
  const value = await store.get("myUser");

  let { data, error } = await supabase
    .from("tbl_favourite")
    .select("movie_id, tbl_movie(id,title,duration,category,thumbnail,year)")
    //value["id"] is user_id, so we join two table favourite and movie with conditional user_id
    .eq("user_id", value["id"]);
  console.log(data);
  return data;
};
