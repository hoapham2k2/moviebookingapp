import supabase from "../../config/supabase/supabase";

//create a function with input value is movieId to insert data
export const InsertFavourite = async (movieId: number) => {
  let { data, error } = await supabase.from("tbl_favourite").select("movie_id");

  const isFavourite = data?.find((item) => item.movie_id === movieId);
};
