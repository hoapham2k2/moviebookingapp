import React, { ChangeEvent, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  DateValidationError,
  MobileDatePicker,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import store from "../../../config/storage/IonicStorage";
interface TicketBookingProps {
  handleReRender: any;
}
const TicketBookingDateTime: React.FC<TicketBookingProps> = ({
  handleReRender,
}) => {
  const timeMap = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
  ];
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);
  const handleSlideClick: React.MouseEventHandler<HTMLElement> = async (e) => {
    const index = e.currentTarget.dataset.index;
    if (index) {
      console.log(index);
      setSelectedSlide(parseInt(index, 10));
      await handleReRender();
    }
  };
  store.set("time_booking", timeMap[selectedSlide!]);
  return (
    <div>
      <div className="w-full h-full flex flex-col gap-4 text-white">
        <div className="flex flex-col">
          <p className="text-base mb-1">Select a date</p>
          <MobileDatePicker
		  	minDate={new Date()}
            onChange={async (
              value: ChangeEvent<HTMLInputElement> | null | any,
              context: PickerChangeHandlerContext<DateValidationError>
            ) => {
              if (value) {
                // Access the value within the ChangeEvent if it's not null
                const handleSaveLocal = async () => {
                  const currentDate = value.$d.toString();
                  console.log(currentDate);
                  await store.set("date_booking", currentDate);
                };
                handleSaveLocal();
                await handleReRender();
              }
            }}
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
        {timeMap.map((time, index) => (
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
