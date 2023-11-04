import React, { useEffect } from "react";
import WishListItems from "./components/WishListItems";

type Props = {};

const WishListPage = (props: Props) => {
  useEffect(() => {}, []);
  return (
    <div className="relative flex flex-col items-center justify-center">
      <header className="mt-4">Wishlist</header>
      <div className="w-full m-4 p-4">
        <WishListItems />
        <WishListItems />
        <WishListItems />
      </div>
    </div>
  );
};

export default WishListPage;
