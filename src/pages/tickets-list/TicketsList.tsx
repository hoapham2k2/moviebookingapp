import React, { useEffect, useState } from "react";
import TicketItem from "./components/TicketItem";
import TicketGetDTO from "../../dtos/TicketGetDTO";
import { GetAllCurrentTicket } from "../../services/ticket/GetTicket";

type Props = {};

const TicketsListPage = (props: Props) => {
  const [tickets, setTickets] = useState<any>();

  useEffect(() => {
    const GetTickets = async () => {
      const response = await GetAllCurrentTicket();
      setTickets(response);
    };
    GetTickets();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <header className="fixed top-5">
        <h1 className="">Booking Summary</h1>
      </header>
      <div className="flex flex-col justify-start mt-14">
        {tickets &&
          tickets.map((ticket: any, index: number) => {
            return (
              <TicketItem
                key={index}
                title={ticket.tbl_movie.title}
                genre={ticket.tbl_movie.category}
                cinema_location={ticket.cinema_location}
                duration={ticket.tbl_movie.duration}
                language={ticket.tbl_movie.country}
                location={ticket.location}
                price={ticket.price}
                quality={ticket.tbl_movie.quality}
                seat={ticket.seat}
                start={ticket.booking_time}
                thumbnail={ticket.tbl_movie.thumbnail}
                date={ticket.booking_date}
              />
            );
          })}
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
