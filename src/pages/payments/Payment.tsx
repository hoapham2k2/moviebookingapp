import { CreditCardIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";
import { BsBank, BsWallet } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import store from "../../config/storage/IonicStorage";
import TicketGetDTO from "../../dtos/TicketGetDTO";
import { InsertTicket } from "../../services/ticket/InsertTicket";

type Props = {};

const Payment = (props: Props) => {
  const [currentMovie, setCurrentMovie] = useState<any>(-1);
  const router = useHistory();

  useEffect(() => {
    const getCurrentIdMovie = async () => {
      const movieId = await store.get("movie_id_booking");
      setCurrentMovie(movieId);
    };
    getCurrentIdMovie();
  }, []);

  const handlePayment = async () => {
    const movieId = await store.get("movie_id_booking");
    const location = await store.get("location");
    const cinemaLocation = await store.get("cinema_location");
    const datetime = await store.get("date_booking");
    const timebook = await store.get("time_booking");
    const seatdata = await store.get("seat");
    const userInfor = await store.get("myUser");
    const ticket = new TicketGetDTO();
    ticket.movie_id = movieId;
    ticket.cinema_location = cinemaLocation;
    ticket.booking_time = timebook;
    ticket.user_id = userInfor["id"];
    ticket.seat = seatdata.toString();
    ticket.location = location;
    ticket.price = 500 * seatdata.length;
    //handle convert date
    const dateBooking = new Date(datetime);

    // Get the year, month, and day of the UTC date
    const year = dateBooking.getUTCFullYear();
    const month = dateBooking.getUTCMonth() + 1;
    const day = dateBooking.getUTCDate() + 1;

    // Format the date as 11-15-2023
    const formattedDate = `${month}-${day}-${year}`;
    console.log("formatted date:", formattedDate);

    ticket.booking_date = formattedDate;
    await InsertTicket(ticket);

    router.push("/paymentStatus");
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/**Header */}
      <header className="absolute text-lg font-semibold top-3 flex w-full items-center justify-between border-b-2 border-slate-800 pb-4">
        <Link to={`/home/ticket/movieId=${currentMovie}`}>
          <ArrowLeftIcon className="w-6 h-6 ml-2" />
        </Link>
        Payment
        <div className="w-6"></div>
      </header>
      {/**Description */}
      <div className="mt-16 p-4">
        <div>
          <p className="text-sm text-slate-400">
            How would you like to make the payment? Kindly select your prefered
            option.
          </p>
          <div>
            <div className="flex items-center justify-between mt-4 bg-slate-900 rounded-xl py-2 my-2 active:scale-95 transition-all duration-200 ease-in-out">
              <div className="flex items-center justify-start gap-4">
                <CreditCardIcon className="w-6 h-6 ml-3" />
                <div>
                  <p>Debit, Credit Card</p>
                  <p className="text-xs text-slate-300">Pay with Visa</p>
                </div>
              </div>
              <ArrowRightIcon className="w-6 h-6 mr-1 " />
            </div>
            <div
              className="flex items-center justify-between mt-4 bg-slate-900 rounded-xl py-2 my-2 active:scale-95 transition-all duration-300 ease-in-out"
              onClick={handlePayment}
            >
              <div className="flex items-center justify-start gap-4">
                <BsBank className="w-6 h-6 ml-3" />
                <div>
                  <p>Bank Transfer</p>
                  <p className="text-xs text-slate-300">
                    Make transfers from your bank account
                  </p>
                </div>
              </div>
              <ArrowRightIcon className="w-6 h-6 mr-1 " />
            </div>
            <div className="flex items-center justify-between mt-4 bg-slate-900 rounded-xl py-2 my-2 active:scale-95 transition-all duration-200 ease-in-out">
              <div className="flex items-center justify-start gap-4">
                <BsWallet className="w-6 h-6 ml-3" />
                <div>
                  <p>Crypto Wallet</p>
                  <p className="text-xs text-slate-300">
                    Pay with your cryptocurrency wallet
                  </p>
                </div>
              </div>
              <ArrowRightIcon className="w-6 h-6 mr-1 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
