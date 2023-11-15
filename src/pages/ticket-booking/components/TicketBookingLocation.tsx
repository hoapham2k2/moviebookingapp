import React from "react";
import { CinemaLocationType } from "../type/CinemaLocationType";
import store from "../../../config/storage/IonicStorage";

interface TicketBookingProps {
  handleReRender: any;
}

const TicketBookingLocation: React.FC<TicketBookingProps> = ({
  handleReRender,
}) => {
  const [location, setLocation] = React.useState("Quận 1");
  const [cinemaLocation, setCinemaLocation] = React.useState(
    "CGV Vincom Đồng Khởi"
  );

  const setInitialValue = async () => {
    await store.set("location", location);
    await store.set("cinema_location", cinemaLocation);
  };

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
      if (item.location == location) {
        item.listCinemas.forEach((item) => {
          cinemaLocationRef.current!.innerHTML += `<option value="${item.toString()}">${item}</option>`;
        });
      }
    });
    setInitialValue();
  }, [location]);

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex flex-col">
        <p className="text-base mb-1">Location</p>
        <select
          className="w-full h-10 border rounded-md bg-white text-black p-2"
          ref={locationRef}
          onChange={async (e) => {
            await store.set("location", e.target.value);
            setLocation(e.target.value);
            console.log(e.target.value);
            await handleReRender();
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
            store.set("cinema_location", e.target.value);
            setCinemaLocation(e.target.value);
            console.log(e.target.value);
            await handleReRender();
          }}
        ></select>
      </div>
    </div>
  );
};

export default TicketBookingLocation;
