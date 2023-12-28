import { CreditCardIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";
import { BsBank, BsWallet } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import store from "../../config/storage/IonicStorage";
import GetVNPayCheckoutUrl from "../../services/payment/VNPay";
import { CURRENT_TICKET, CURRENT_USER, TICKET } from "../../utils/SharedValues";
import TicketGetDTO from "../../dtos/TicketGetDTO";

type Props = {};

const Payment = (props: Props) => {
  // const [currentMovie, setCurrentMovie] = useState<any>(-1);
  const router = useHistory();
  const [ticketId, setTicketId] = useState<number>(-1);

  // useEffect(() => {
  //   const getCurrentIdMovie = async () => {
  //     const movieId = await store.get(TICKET.MOVIE_ID);
  //     setCurrentMovie(movieId);
  //   };
  //   getCurrentIdMovie();
  // }, []);

  const handlePayment = async () => {
    const ticket = new TicketGetDTO();

    ticket.movie_id = await store.get(TICKET.MOVIE_ID);
    ticket.cinema_location = await store.get(TICKET.CINEMA_LOCATION);
    ticket.location = await store.get(TICKET.LOCATION);
    ticket.booking_date = await store.get(TICKET.DATE_BOOKING);
    ticket.booking_time = await store.get(TICKET.TIME_BOOKING);
    ticket.user_id = await store.get(CURRENT_USER).then((res: any) => {
      return res["id"];
    });
    ticket.seat = await store.get(TICKET.SEAT);
    ticket.price = 500 * ticket.seat.length;

    console.log(ticket);

    await store.set(CURRENT_TICKET, ticket);

    const payment_url = GetVNPayCheckoutUrl(ticket.id.toString());

    // redirect to payment url
    window.location.href = payment_url;
  };

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/**Header */}
      <header className="absolute text-lg font-semibold top-3 flex w-full items-center justify-between border-b-2 border-slate-800 pb-4">
        {/* <Link to={`/home/ticket/movieId=${currentMovie}`}>
          <ArrowLeftIcon className="w-6 h-6 ml-2" />
        </Link> */}
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

