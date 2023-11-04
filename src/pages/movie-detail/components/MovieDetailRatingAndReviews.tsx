import React from "react";
import MovieGetDTO from "../../../dtos/MovieGetDTO";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
type Props = {
  movie: MovieGetDTO;
};

const MovieDetailRatingAndReviews = (props: Props) => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const [rating, setRating] = React.useState<Number>(randomNumber);
  return (
    <div className="w-full h-full overflow-y-auto">
      {/* Rating Section */}
      <div className="w-full h-full flex flex-col gap-2">
        <div className="text-white text-lg font-bold">Rating</div>
        <div className="w-full h-12 flex items-center justify-center gap-2">
          {[...Array(Math.floor(Number(rating)))].map((item, index) => {
            return <BsStarFill className="text-yellow-500" key={index} />;
          })}
          {Number(rating) - Math.floor(Number(rating)) > 0 && (
            <BsStarHalf className="text-yellow-500" />
          )}
          {
            <span className="text-white text-md ">
              {`(${Number(rating).toFixed(1)})`}
            </span>
          }
        </div>
        {/* Review Section */}
        <div className="text-white text-lg font-bold">Reviews</div>
        <div className="w-full h-12 flex items-center justify-center gap-2">
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {[...Array(4)].map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full h-full flex flex-col gap-2 mt-48">
                    <div className="flex gap-2 items-center">
                      <div className="w-10 h-10 rounded-full bg-zinc-700"></div>
                      <div className="flex flex-col gap-1">
                        <div className="text-white font-bold text-sm">
                          User Name
                        </div>
                        <div className="text-neutral-500 text-sm">
                          12/12/2021
                        </div>
                      </div>
                    </div>
                    <div className="text-white text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia, voluptate.
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailRatingAndReviews;
