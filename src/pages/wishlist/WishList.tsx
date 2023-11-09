import React, { useEffect, useState } from "react";
import WishListItems from "./components/WishListItems";
import { GetWishList } from "../../services/wishlist/GetWishList";
import { DeleteFavourite } from "../../services/wishlist/DeleteWishList";
import toast from "react-hot-toast";

type Props = {};

const WishListPage = (props: Props) => {
  const [wishlist, setWishList] = useState<Array<any>>();
  useEffect(() => {
    const getWishList = async () => {
      const resWishList = await GetWishList();
      setWishList(resWishList?.reverse());
    };
    getWishList();
  }, []);

  const handleReRender = async () => {
    const resWishList = await GetWishList();
    setWishList(resWishList?.reverse());
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <header className="flex justify-center items-center p-4">
        <h1>Wishlist</h1>
      </header>
      <div className="w-full px-4">
        {wishlist &&
          wishlist!.map((item, index) => {
            const movieInfor = item.tbl_movie;
            return (
              <WishListItems
                key={index}
                id={movieInfor.id}
                title={movieInfor.title}
                genre={movieInfor.category}
                duration={movieInfor.duration}
                rating={4.5}
                release={movieInfor.year}
                thumbnail={movieInfor.thumbnail}
                handleReRender={handleReRender}
              />
            );
          })}
      </div>
    </div>
  );
};

export default WishListPage;
