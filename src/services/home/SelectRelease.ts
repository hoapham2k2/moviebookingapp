import supabase from "../../config/supabase/supabase";
import MovieGetDTO from "../../dtos/MovieGetDTO";


/* 
  <summary>
    Modified by: Hoa Pham
    Modified on: 28-Dec-2023
    Description: Get all movie from database
  </summary>
  <returns>Promise<MovieGetDTO[] | null | undefined></returns>
*/

export default async function SelectRelease(): Promise<
  MovieGetDTO[] | null | undefined
> {
  const { data, error } = await supabase.rpc("func_select_release");
  if (error) {
    console.log(error);
    return null;
  }
  if (data) {
    console.log(data);
    const movies: MovieGetDTO[] = data.map((movie: MovieGetDTO) => {
      return {
        id: movie.id,
        title: movie.title,
        year: movie.year,
        createat: movie.createat,
        quality: movie.quality,
        alternative_title: movie.alternative_title,
        thumbnail: movie.thumbnail,
        country: movie.country,
        href: movie.href,
        description: movie.description,
        duration: movie.duration,
        category: movie.category,
      };
    });
    return movies;
  }
}
