import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
type Props = {};

const TicketBookingDateTime = (props: Props) => {
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);
  const handleSlideClick: React.MouseEventHandler<HTMLElement> = (e) => {
    const index = e.currentTarget.dataset.index;
    if (index) {
      console.log(index);
      setSelectedSlide(parseInt(index, 10));
    }
  };
  return (
    <div>
      <div className="w-full h-full flex flex-col gap-4 text-white">
        <div className="flex flex-col">
          <p className="text-base mb-1">Select a date</p>
          <MobileDatePicker
            renderLoading={() => <p>Loading...</p>}
            sx={{
              // label
              "& label": {
                color: "#000",
              },
              // input
              "& .MuiInputBase-root": {
                backgroundColor: "#fff",
                height: "40px",
                borderRadius: "0.5rem",
                border: "1px solid #fff",
                color: "#000",
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

        <p className="block font-base mb-2">Select a time</p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={12}
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
        ].map((time, index) => (
          <SwiperSlide
            key={time}
            className={`border rounded-md text-center py-2 ${
              selectedSlide == index ? "bg-rose-500" : ""
            }`}
            onClick={handleSlideClick}
            data-index={index}
          >
            <p className="font-bold">{time}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TicketBookingDateTime;
