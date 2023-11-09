import React, { useEffect } from "react";
import { useHistory } from "react-router";
import TicketBookingHeader from "./components/TicketBookingHeader";
import TicketBookingLocation from "./components/TicketBookingLocation";
import TicketBookingDateTime from "./components/TicketBookingDateTime";
import TicketBookingSeat from "./components/TicketBookingSeat";
import store from "../../config/storage/IonicStorage";
import { GetSelectedSeat } from "../../services/seat/GetSelectedSeat";

type Props = {};

const TicketBookingPage = (props: Props) => {
  const router = useHistory();
  const movieId = router.location.pathname.split("/")[3].split("=")[1];
  store.set("movie_id_booking", movieId);
  console.log(movieId);
  const [selectedSeat, setSelectedSeat] = React.useState<any>([]);
  const handleReRender = async () => {
    console.log("Re render start");
    const seatChoosen = await GetSelectedSeat();
    console.log("handle Start get selected seat", seatChoosen);
    setSelectedSeat(seatChoosen);
  };

  console.log("re-render selectedSeat: ", selectedSeat);

  return (
    <>
      <TicketBookingHeader />
      <div className="p-4 w-full h-full  ">
        <div className="w-full h-full flex flex-col gap-4">
          <div className="w-full ">
            <TicketBookingLocation handleReRender={handleReRender} />
          </div>
          <div className="w-full ">
            <TicketBookingDateTime handleReRender={handleReRender} />
          </div>
          <div className="w-full ">
            <TicketBookingSeat selectedSeat={selectedSeat} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketBookingPage;
