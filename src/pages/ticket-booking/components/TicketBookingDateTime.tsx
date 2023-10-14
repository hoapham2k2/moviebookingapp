import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
type Props = {};

const TicketBookingDateTime = (props: Props) => {
  return (
    <div>
      <div className="w-full h-full flex flex-col gap-4 text-white">
        <div className="flex flex-col">
          <p className="text-2xl font-bold">Select a date</p>
          <MobileDatePicker
            renderLoading={() => <p>Loading...</p>}
            sx={{
              // label
              "& label": {
                color: "#fff",
              },
              // input
              "& .MuiInputBase-root": {
                backgroundColor: "#333",
                borderRadius: "0.5rem",
                border: "1px solid #fff",
                color: "#fff",
                // marginTop: "0.5rem",
              },
              // calendar
              "& .MuiPickersCalendarHeader-root": {
                backgroundColor: "#333",
                color: "#fff",
              },
            }}
          />
        </div>

        <p className="block text-2xl font-bold">Select a time</p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[
          "10:00 AM",
          "11:00 AM",
          "12:00 PM",
          "1:00 PM",
          "2:00 PM",
          "3:00 PM",
        ].map((time) => (
          <SwiperSlide
            key={time}
            className="border rounded-md text-center py-2 "
          >
            <p className=" font-bold">{time}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TicketBookingDateTime;
