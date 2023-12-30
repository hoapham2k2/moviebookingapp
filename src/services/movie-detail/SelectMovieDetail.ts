import supabase from "../../config/supabase/supabase";
import MovieGetDTO from "../../dtos/MovieGetDTO";


/* 
  <summary>
    Modified by: Hoa Pham
    Modified on: 28-Dec-2023
    Description: Get movie detail from database
  </summary>
  <param name="id_movie">the movie id to get detail</param>
  <returns>MovieGetDTO</returns>
*/
export default async function SelectMovieDetail(
  id_movie: Number
): Promise<MovieGetDTO | null | undefined> {
  const { data, error } = await supabase.rpc("func_select_movie_detail", {
    id_movie: id_movie,
  });
  if (error) {
    return null;
  }

  if (data[0]) {
    let movie: MovieGetDTO = new MovieGetDTO();
    movie = { ...data[0] };
    console.log("movie detail fetch:", movie);
    return movie;
  }
}
