import React from "react";
import { useHistory } from "react-router";
import TicketBookingHeader from "./components/TicketBookingHeader";
import TicketBookingLocation from "./components/TicketBookingLocation";
import TicketBookingDateTime from "./components/TicketBookingDateTime";
import TicketBookingSeat from "./components/TicketBookingSeat";

type Props = {};

const TicketBookingPage = (props: Props) => {
  const router = useHistory();
  const movieId = router.location.pathname.split("/")[3].split("=")[1];
  console.log(movieId);
  return (
    <>
      <TicketBookingHeader />
      <div className="p-4 w-full h-full  ">
        <div className="w-full h-full flex flex-col gap-4">
          <div className="w-full ">
            <TicketBookingLocation />
          </div>
          <div className="w-full ">
            <TicketBookingDateTime />
          </div>
          <div className="w-full ">
            <TicketBookingSeat />
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketBookingPage;
