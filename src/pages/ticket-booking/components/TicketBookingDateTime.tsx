import React, { ChangeEvent, useState } from "react";
import dayjs from "dayjs";
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
  const [selectedSlide, setSelectedSlide] = useState<number | null>(0);

  const handleSlideClick: React.MouseEventHandler<HTMLElement> = async (e) => {
    const index = e.currentTarget.dataset.index;
    if (index) {
      console.log(index);
      store.set("time_booking", timeMap[parseInt(index)]);
      setSelectedSlide(parseInt(index, 10));
      await handleReRender();
    }
  };

  return (
    <div>
      <div className="w-full h-full flex flex-col gap-4 text-white">
        <div className="flex flex-col">
          <p className="text-base mb-1">Select a date</p>
          <MobileDatePicker
            disablePast
            defaultValue={dayjs()}
            onChange={async (
              value: any,
              context: PickerChangeHandlerContext<DateValidationError>
            ) => {
              if (value) {
                // Access the value within the ChangeEvent if it's not null
                const handleSaveLocal = async () => {
                  const currentDate = value.$d.toString();
                  await store.set("date_booking", currentDate);
                  console.log(currentDate);
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
