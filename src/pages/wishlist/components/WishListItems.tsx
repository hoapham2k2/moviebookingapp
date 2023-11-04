import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { TrashIcon } from "@heroicons/react/24/outline";
import { DeleteFavourite } from "../../../services/wishlist/DeleteWishList";
import toast from "react-hot-toast";

interface WishListComponent {
  id: any;
  title: any;
  genre: any;
  rating: any;
  duration: any;
  release: any;
  thumbnail: any;
  handleReRender: any;
}

const WishListItems: React.FC<WishListComponent> = ({
  id,
  title,
  genre,
  rating,
  duration,
  release,
  thumbnail,
  handleReRender,
}) => {
  const handleDelete = () => {
    DeleteFavourite(id)
      .then((res) => {
        toast.success("Delete successfully!");
        handleReRender();
      })
      .catch((error) => {
        toast.error("Delete failed!");
      });
  };
  console.log(title.length);
  return (
    <div className="relative grid grid-cols-5 border border-slate-400 rounded-lg mb-4">
      <div className="col-span-2 m-4 ">
        <img className="w-24 h-32 bg-slate-400" src={thumbnail}></img>
      </div>
      <div className="col-span-3 my-4 flex flex-col justify-between">
        <h1 className="text-base mb-1 font-semibold">
          {title.length < 35 ? title : title.substring(0, 35) + "..."}
        </h1>
        <p className="text-xs text-slate-500 ">Genre: {genre}</p>
        <p className="text-xs text-slate-500 ">Release year: {release}</p>
        <p className="text-xs text-slate-500 ">Độ dài: {duration}</p>
        <div className="flex ">
          <div className="flex items-center justify-center gap-1">
            {[...Array(Math.floor(Number(rating)))].map((item, index) => {
              return (
                <BsStarFill className="text-yellow-500 text-xs" key={index} />
              );
            })}
            {Number(rating) - Math.floor(Number(rating)) > 0 && (
              <BsStarHalf className="text-yellow-500 text-xs" />
            )}
            {
              <span className="text-slate-500 text-xs">
                {`(${Number(rating).toFixed(1)})`}
              </span>
            }
          </div>
        </div>
      </div>
      <div className="absolute right-3 bottom-3">
        <TrashIcon
          className="w-4 h-4 text-white transition-all active:scale-150 duration-300"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default WishListItems;
