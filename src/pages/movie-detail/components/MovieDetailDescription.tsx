import React from "react";
import MovieGetDTO from "../../../dtos/MovieGetDTO";

type Props = {
  movie: MovieGetDTO;
};

const MovieDetailDescription = (props: Props) => {
  return (
    <div className="w-full h-full overflow-y-auto">
      <MovieDescriptionItem
        title={`Quốc gia:`}
        value={`${props.movie.country}`}
      />
      {props.movie.category && (
        <MovieDescriptionItem
          title={`Thể loại:`}
          value={`${props.movie.category}`}
        />
      )}
      <MovieDescriptionItem title={`Năm:`} value={`${props.movie.year}`} />
      <MovieDescriptionItem
        title={`Chất lượng:`}
        value={`${props.movie.quality}`}
      />
      <MovieDescriptionItem
        title={`Thời lượng:`}
        value={`${props.movie.duration}`}
      />
      <MovieDescriptionItem
        title={`Tên khác:`}
        value={`${props.movie.alternative_title}`}
      />
      <MovieDescriptionItem title={``} value={`${props.movie.description}`} />
    </div>
  );
};

export default MovieDetailDescription;

type ItemProps = {
  title: string;
  value: string;
};

const MovieDescriptionItem = (props: ItemProps) => {
  return (
    <div className="flex flex-wrap gap-1 text-md">
      <div className="text-gray-400">{props.title}</div>
      <div className="text-white">{props.value}</div>
    </div>
  );
};
