import supabase from "../../config/supabase/supabase";
import MovieGetDTO from "../../dtos/MovieGetDTO";

export default async function SearchMovie(search: string) {
  let { data, error } = await supabase
    .from("tbl_movie")
    .select("*")
    .ilike("title", `%${search}%`);

  if (error) {
    return null;
  }
  if (data) {
    console.log(data);
    return data;
  }
}
