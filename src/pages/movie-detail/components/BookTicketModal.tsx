import React from "react";
import { RiTicket2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import store from "../../../config/storage/IonicStorage";
import dayjs from "dayjs";
import { TICKET } from "../../../utils/SharedValues";
type Props = {
  movieId: Number;
};

const BookTicketModal = (props: Props) => {
  const handleInitialStore = async () => {
    await store.set(TICKET.TIME_BOOKING, "10:00 AM");
    await store.set(TICKET.DATE_BOOKING, "11/15/2023");
  };
  return (
    <div
      className="w-12 h-12 rounded-full bg-rose-500 absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      onClick={handleInitialStore}
    >
      <Link to={`/home/ticket/movieId=${props.movieId}`}>
        <RiTicket2Line className="text-xl text-white" />
      </Link>
    </div>
  );
};

export default BookTicketModal;
