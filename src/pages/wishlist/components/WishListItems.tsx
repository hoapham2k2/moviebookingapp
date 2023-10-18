import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { TrashIcon } from "@heroicons/react/24/outline";

type Props = {};

const WishListItems = (props: Props) => {
  const rating = 4.5;
  const title = "Người nhện đường về nhà là vào tim ta.";
  console.log(title.length);
  return (
    <div className="relative grid grid-cols-5 border border-slate-400 rounded-lg mb-4">
      <div className="col-span-2 m-4 ">
        <img className="w-24 h-32 bg-slate-400"></img>
      </div>
      <div className="col-span-3 my-4">
        <h1 className="text-base mb-1 font-semibold">
          {title.length < 35 ? title : title.substring(0, 35) + "..."}
        </h1>
        <p className="text-xs text-slate-500 ">
          Genre: Hành động, Siêu nhiên, Khoa học
        </p>
        <p className="text-xs text-slate-500 ">Release year: Tháng 10, 2021</p>
        <p className="text-xs text-slate-500 ">Độ dài: 2h19p</p>
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
        <TrashIcon className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default WishListItems;
