import React from "react";
import { CinemaLocationType } from "../type/CinemaLocationType";
import store from "../../../config/storage/IonicStorage";

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
        <p className="text-base mb-1">Location</p>
        <select
          className="w-full h-10 border rounded-md bg-white text-black p-2"
          ref={locationRef}
          onChange={async (e) => {
            setLocation(e.target.value);
            await store.set("location", e.target.value);
          }}
          value={location}
        >
          {myDataLocation.map((item, index) => {
            return (
              <option className="text-xs" value={item.location} key={index}>
                {item.location}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex flex-col">
        <p className="text-base mb-1">Cinema Location</p>
        <select
          className="w-full h-10 border rounded-md bg-white text-black p-2"
          ref={cinemaLocationRef}
          value={cinemaLocation}
          onChange={async (
            e: React.ChangeEvent<HTMLSelectElement>
          ): Promise<void> => {
            setCinemaLocation(e.target.value);
            console.log(e.target.value);
            await store.set("cinema_location", e.target.value);
          }}
        ></select>
      </div>
    </div>
  );
};

export default TicketBookingLocation;
