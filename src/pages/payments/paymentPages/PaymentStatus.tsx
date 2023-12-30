import { ArrowLeftIcon, TicketIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { useHistory } from "react-router-dom";
import { CURRENT_TICKET, ROUTES, TICKET } from "../../../utils/SharedValues";
import React from "react";
import store from "../../../config/storage/IonicStorage";
import { InsertTicket } from "../../../services/ticket/InsertTicket";

type Props = {};

const PaymentStatus = (props: Props) => {
  const [paymentStatus, setPaymentStatus] = React.useState<any>({});
  const router = useHistory();
  const handleBackMain = () => {
    router.push(ROUTES.HOME);
  };

  /* 
    <summary>
      Modified by: Hoa Pham
      Modified on: 30-Dec-2023
      Description: This below useEffect hook will handle the query params from the payment gateway, if the payment is successful (vnp_TransactionStatus = 00) then the paymentStatus will be set to true, otherwise (vnp_TransactionStatus != 00) the paymentStatus will be set to false (default)
    </summary>
  */
  React.useEffect(() => {
    const handleQueryParams = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const vnp_TransactionStatus = urlParams.get("vnp_TransactionStatus");

        if (vnp_TransactionStatus === "00") {
          const ticket = await store.get(CURRENT_TICKET);
          console.log(ticket);
          const response = await InsertTicket(ticket);
          console.log(response);

          if (response) {
            setPaymentStatus({
              isSuccess: true,
              message: "Your payment is successful",
            });
          } else {
            setPaymentStatus({
              isSuccess: false,
              message: "Your payment is failed",
            });
          }
        }

        await store.remove(TICKET.LOCATION);
        await store.remove(TICKET.MOVIE_ID);
        await store.remove(TICKET.CINEMA_LOCATION);
        await store.remove(TICKET.DATE_BOOKING);
        await store.remove(TICKET.TIME_BOOKING);
        await store.remove(TICKET.SEAT);
        console.log("removed");
      } catch (error) {
        console.log(error);
      }
    };
    handleQueryParams();
  }, []);

  /* 
    <summary>
      Modified by: Hoa Pham
      Modified on: 28-Dec-2023
      Description: This below useEffect hook will clear the ticket booking data from the storage once the component is unmounted
    </summary>
  */
  // React.useEffect(() => {
  //   const clearTicketBookingData = async () => {
  //     await store.remove(TICKET.LOCATION);
  //     await store.remove(TICKET.MOVIE_ID);
  //     await store.remove(TICKET.CINEMA_LOCATION);
  //     await store.remove(TICKET.DATE_BOOKING);
  //     await store.remove(TICKET.TIME_BOOKING);
  //     await store.remove(TICKET.SEAT);
  //     await store.remove(CURRENT_TICKET);
  //     console.log("removed");
  //   };
  //   clearTicketBookingData();
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center mt-36 mb-4">
        <div className="absolute w-28 h-28 bg-white rounded-full  "></div>

        {paymentStatus && paymentStatus.isSuccess === true ? (
          <CheckCircleIcon className="w-40 object-cover rounded-full text-green-600 z-10" />
        ) : (
          <XCircleIcon className="w-40 object-cover rounded-full text-rose-600 z-10" />
        )}
      </div>
      <div className="flex flex-col justify-center items-center mx-2 overflow-hidden text-center">
        <h1 className="text-xl pb-4 font-semibold">{paymentStatus.message}</h1>

        <div className="flex gap-4 mt-12 mb-12">
          <button
            className=" bg-slate-900 mx-2 p-3 flex gap-2 rounded-lg font-semibold transition-all active:scale-125 duration-300 ease-in-out"
            onClick={handleBackMain}
          >
            <ArrowLeftIcon className="w-6 h-6" />
            Main menu
          </button>
          <button className="bg-slate-900 mx-2 p-3 flex gap-2 rounded-lg font-semibold transition-all active:scale-125 duration-300 ease-in-out">
            <TicketIcon className="w-6 h-6" />
            View tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
