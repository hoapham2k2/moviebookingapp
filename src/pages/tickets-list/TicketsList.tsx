import React from "react";
import TicketItem from "./components/TicketItem";

type Props = {};

const TicketsListPage = (props: Props) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <header className="fixed top-5">
        <h1 className="">Booking Summary</h1>
      </header>
      <div>
        <TicketItem />
      </div>
      {/* <div className="fixed bottom-14 w-full flex">
        <button className="w-full bg-rose-500 font-semibold p-2.5 mb-4 rounded-md active:scale-75 transition-all duration-300 ease-in-out my-2 mx-4">
          Process to Payment
        </button>
      </div> */}
    </div>
  );
};

export default TicketsListPage;
