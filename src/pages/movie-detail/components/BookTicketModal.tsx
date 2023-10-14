import React from "react";
import { RiTicket2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
type Props = {
  movieId: Number;
};

const BookTicketModal = (props: Props) => {
  return (
    <div className="w-12 h-12 rounded-full bg-red-300 absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <Link to={`/home/ticket/movieId=${props.movieId}`}>
        <RiTicket2Line className="text-xl text-white" />
      </Link>
    </div>
  );
};

export default BookTicketModal;
