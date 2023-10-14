import React from "react";
import { CinemaLocationType } from "../type/CinemaLocationType";

type Props = {};

const TicketBookingLocation = (props: Props) => {
  const [location, setLocation] = React.useState("Quan 1");
  const [cinemaLocation, setCinemaLocation] = React.useState("CGV Vincom");
  const locationRef = React.useRef<HTMLSelectElement>(null);
  const cinemaLocationRef = React.useRef<HTMLSelectElement>(null);
  const myDataLocation: CinemaLocationType[] = [
    {
      location: "Chọn Tỉnh/Thành Phố",
      listCinemas: [],
    },
    {
      location: "Quận 1",
      listCinemas: [
        "CGV Vincom Đồng Khởi",
        "Viện Trao đổi Văn Hóa Pháp - IDECAF",
        "Galaxy Trung Chánh",
      ],
    },
    {
      location: "Thủ Đức",
      listCinemas: [
        "CGV Giga Mall Thủ Đức",
        "CGV Vincom Thủ Đức",
        "Lotte Cinema Thủ Đức",
      ],
    },
  ];

  React.useEffect(() => {
    // mỗi lần location thay đổi thì load lại select tag của cinema
    cinemaLocationRef.current!.innerHTML = "";
    myDataLocation.forEach((item) => {
      if (item.location === location) {
        item.listCinemas.forEach((item) => {
          cinemaLocationRef.current!.innerHTML += `<option value=${item}>${item}</option>`;
        });
      }
    });
  }, [location]);

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex flex-col">
        <p className="text-2xl font-bold">Location</p>
        <select
          className="w-full h-10 border rounded-md"
          ref={locationRef}
          onChange={(e) => {
            setLocation(e.target.value);
            console.log(e.target.value);
          }}
          value={location}
        >
          {myDataLocation.map((item, index) => {
            return (
              <option value={item.location} key={index}>
                {item.location}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex flex-col">
        <p className="text-2xl font-bold">Cinema Location</p>
        <select
          className="w-full h-10 border rounded-md"
          ref={cinemaLocationRef}
          value={cinemaLocation}
          onChange={(e) => {
            setCinemaLocation(e.target.value);
            console.log(cinemaLocation);
          }}
        ></select>
      </div>
    </div>
  );
};

export default TicketBookingLocation;
