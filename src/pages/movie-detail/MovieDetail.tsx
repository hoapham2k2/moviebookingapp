import React, { useEffect } from "react";
import { RouteProps, useHistory } from "react-router-dom";
import SelectMovieDetail from "../../services/movie-detail/SelectMovieDetail";
import MovieGetDTO from "../../dtos/MovieGetDTO";
import MovieDetailHeader from "./components/MovieDetailHeader";
import MovieDetailBody from "./components/MovieDetailBody";
import BookTicketModal from "./components/BookTicketModal";

type Props = {};

const MovieDetailPage = (appProps: Props) => {
  const [movieId, setmovieId] = React.useState<Number>(0);
  const [movieDetail, setMovieDetail] = React.useState<
    MovieGetDTO | null | undefined
  >(null);
  const router = useHistory();

  useEffect(() => {
    const movieId = router.location.pathname.split("/")[2];
    setmovieId(Number(movieId));

    SelectMovieDetail(Number(movieId)).then((res) => {
      setMovieDetail(res);
    });
  }, []);

  return (
    <div className="w-full h-full overflow-y-hidden">
      {movieDetail && (
        <div className="w-full h-full px-4 py-6 flex flex-col gap-4">
          <MovieDetailHeader movie={movieDetail} />
          <MovieDetailBody movie={movieDetail} />
          <BookTicketModal movieId={movieId} />
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;
