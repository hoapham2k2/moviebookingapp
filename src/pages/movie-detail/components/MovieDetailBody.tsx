import React, { useEffect } from "react";
import MovieGetDTO from "../../../dtos/MovieGetDTO";
import MovieDetailDescription from "./MovieDetailDescription";
import MovieDetailRatingAndReviews from "./MovieDetailRatingAndReviews";

type Props = {
  movie: MovieGetDTO;
};

const MovieDetailBody = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState<string>("Movie Detail");

  return (
    <div className="w-full h-full">
      <div className="w-full  grid grid-cols-2 gap-2 pt-2 ">
        {/* tạo 2 tab 'Movie Detail' và 'Rating & Review */}
        <div className="col-span-1">
          <div
            className={`text-center  cursor-pointer ${
              activeTab === "Movie Detail" ? "border-b pb-2" : ""
            }`}
            onClick={() => {
              setActiveTab("Movie Detail");
            }}
          >
            Movie Detail
          </div>
        </div>
        <div className="col-span-1">
          <div
            className={`text-center  cursor-pointer ${
              activeTab === "Rating & Review" ? "border-b pb-2" : ""
            }`}
            onClick={() => {
              setActiveTab("Rating & Review");
              console.log(activeTab);
            }}
          >
            Rating & Review
          </div>
        </div>
      </div>
      <div className="w-full h-full p-4">
        {activeTab === "Movie Detail" ? (
          <MovieDetailDescription movie={props.movie} />
        ) : (
          <MovieDetailRatingAndReviews movie={props.movie} />
        )}
      </div>
    </div>
  );
};

export default MovieDetailBody;
