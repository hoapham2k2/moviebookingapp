import React from "react";

interface TicketComponent {
  title: string;
  genre: string;
  duration: string;
  language: string;
  quality: string;
  location: string;
  cinema_location: string;
  seat: string;
  start: string;
  price: string;
  thumbnail: string;
  date: string;
}

const TicketItem: React.FC<TicketComponent> = ({
  title,
  genre,
  duration,
  language,
  quality,
  location,
  cinema_location,
  seat,
  start,
  price,
  thumbnail,
  date,
}) => {
  const timeplusEnd = (startTimeString: string, durationTime: string) => {
    // Chuyển đổi chuỗi thời gian thành đối tượng Date
    let startTime = new Date("2000-01-01 " + startTimeString); // Gán ngày cố định để tránh vấn đề về ngày
    let duration = parseInt(durationTime); // Chuyển duration thành số nguyên

    // Thêm duration (phút) vào thời gian bắt đầu
    startTime.setMinutes(startTime.getMinutes() + duration);

    // Chuyển đổi lại thời gian thành định dạng mong muốn (HH:mm AM/PM)
    let hours = startTime.getHours();
    let minutes = startTime.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // Đổi giờ 0 thành 12
    let formattedTime =
      hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + ampm;
    return formattedTime;
  };

  return (
    <div className="border border-slate-700 mb-8 mx-2 rounded-3xl">
      <div className="flex flex-col justify-center w-full my-2">
        <div className="grid grid-cols-5 items-center border border-slate-700 rounded-3xl px-4 mx-4 py-2">
          <div className="col-span-2">
            <img className="w-24 h-36 bg-slate-400" src={thumbnail}></img>
          </div>
          <div className="col-span-3 flex flex-col justify-between h-full">
            <h1 className="font-semibold text-lg mb-2">
              {title.length > 16 ? title.substring(0, 16) + "..." : title}
            </h1>
            <p className="text-slate-400 text-sm mb-2">
              {genre != null
                ? genre.substring(0, genre.length - 1) + "."
                : genre}
            </p>
            <p className="text-slate-400 text-sm mb-2">Độ dài: {duration}</p>
            <p className="text-slate-400 text-sm mb-2">Ngôn ngữ: {language}</p>

            <p className="text-slate-400 text-sm mb-2">Classic Ticket</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border border-slate-700 rounded-3xl p-4 mx-4 my-1">
          <div className="flex flex-col w-full mb-2">
            <h3 className="text-sm text-slate-500 mb-1">Cinema</h3>
            <p>{cinema_location}</p>
          </div>
          <div className="flex justify-between gap-3 w-full">
            <div className="flex flex-col">
              <h3 className="text-sm text-slate-500 mb-1">Date</h3>
              <p className="text-xs">{date} </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm text-slate-500 mb-1">Seat</h3>
              <p className="text-xs">
                {" "}
                {seat.length > 8 ? seat.substring(0, 8) + "..." : seat}
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm text-slate-500 mb-1">Start</h3>
              <p className="text-xs">{start}</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm text-slate-500 mb-1">Estimate End</h3>
              <p className="text-xs">{timeplusEnd(start, duration)}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border border-slate-700 rounded-3xl p-4 mx-4 my-1">
          <div className="flex flex-col w-full mb-2">
            <h3 className=" mb-1">Ticket</h3>
            <div className="flex justify-between">
              <p className="text-sm text-slate-500">Classic ticket</p>
              <p>${price}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3 w-full">
            <div className="flex flex-col w-full">
              <h3 className=" mb-1">Charges</h3>
              <div className="flex justify-between">
                <p className="text-sm text-slate-500">Services</p>
                <p>$50</p>
              </div>
            </div>
            <div className="w-full border border-slate-400 "></div>
            <div className="flex justify-between">
              <p>Totals Payable</p>
              <p>${parseInt(price) + 50}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
