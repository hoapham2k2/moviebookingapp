import React, { useEffect, useState } from "react";
import MovieGetDTO from "../../../dtos/MovieGetDTO";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import handlePreviewString from "../../../utils/HandlePreviewString";
import ConvertCategoryIntoList from "../../../utils/ConvertCategoryIntoList";
import { AiTwotoneCalendar } from "react-icons/ai";
import { SlScreenDesktop } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";
import { InsertFavourite } from "../../../services/movie-detail/InsertMovieFavourite";
import toast from "react-hot-toast";
import supabase from "../../../config/supabase/supabase";

type Props = {
  movie: MovieGetDTO;
};

const MovieDetailHeader = (props: Props) => {
  const [isFavourite, setIsFavourite] = useState<Boolean>(false);

  useEffect(() => {
    const checkFavourite = async () => {
      let { data, error } = await supabase
        .from("tbl_favourite")
        .select("movie_id");

      const favourited = !!data?.find(
        (item: any) => item.movie_id === props.movie.id
      );
      console.log(favourited);
      setIsFavourite(favourited);
    };
    checkFavourite();
  }, [isFavourite]);

  const handleAddFavourite = async () => {
    const isFavourite = await InsertFavourite(props.movie.id);
    if (isFavourite) {
      toast.success("Added to favourite!");
      setIsFavourite(true);
    } else {
      toast.error("This movies already added to favourite", {
        style: {
          textAlign: "center",
          width: "70%",
        },
        duration: 1000,
      });
    }
  };

  return (
    <div className=" grid grid-cols-12 gap-2 justify-items-center items-center">
      {/* Movie Poster (col-span-4) */}
      <div className={`col-span-4 rounded-lg overflow-hidden`}>
        <img
          src={props.movie.thumbnail}
          alt={props.movie.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Movie Details (col-span-8) */}
      <div className={`col-span-8 h-full flex flex-col gap-3`}>
        <div className=" grid grid-cols-12 flex-1">
          <div className="col-span-10 font-bold text-lg flex items-center">
            {handlePreviewString(props.movie.title, 40)}
          </div>
          <div className="col-span-2  justify-end flex items-center ">
            <AiFillHeart
              className={`text-xl ${
                isFavourite ? "text-rose-400" : "text-slate-50"
              } transition-all active:scale-125 duration-300`}
              onClick={handleAddFavourite}
            />
          </div>
        </div>
        <div className="flex gap-1 flex-wrap">
          {props.movie.category &&
            ConvertCategoryIntoList(props.movie.category).map((item, index) => {
              return (
                <span
                  key={index}
                  className="text-xs border  px-[4px] rounded-lg"
                >
                  {item}
                </span>
              );
            })}
        </div>
        <div className="text-xs flex items-center gap-3">
          <div className="flex items-end gap-1">
            <AiTwotoneCalendar className="text-lg" />
            <span className="text-neutral-500">{props.movie.year}</span>
          </div>
          <div className="flex items-end gap-1">
            <SlScreenDesktop className="text-lg" />
            <span className="text-neutral-500">15+</span>
          </div>
          <div className="flex items-end gap-1">
            <AiOutlineClockCircle className="text-lg" />
            <span className="text-neutral-500">{props.movie.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailHeader;
