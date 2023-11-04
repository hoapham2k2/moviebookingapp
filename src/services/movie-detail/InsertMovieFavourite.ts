import supabase from "../../config/supabase/supabase";
import store from "../../config/storage/IonicStorage";

//create a function with input value is movieId to insert data
export const InsertFavourite = async (movieId: number) => {
  let { data, error } = await supabase.from("tbl_favourite").select("movie_id");

  const isFavourite = data?.find((item) => item.movie_id === movieId);

  if (isFavourite) {
    return false;
  } else {
    const insertFavouriteUser = async () => {
      //get data from local to get user_id
      const value = await store.get("myUser");
      //value["id"] contain user id
      console.log(value["id"]);
      //call insert api from supabase
      const { data, error } = await supabase
        .from("tbl_favourite")
        .insert([{ user_id: value["id"], movie_id: movieId }])
        .select();
    };
    //call function to start insert data
    insertFavouriteUser();
    return true;
  }
};
