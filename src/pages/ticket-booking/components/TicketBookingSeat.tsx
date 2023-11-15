import React, { useEffect } from "react";
import store from "../../../config/storage/IonicStorage";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { GetSelectedSeat } from "../../../services/seat/GetSelectedSeat";

interface TicketBookingSeatProps {
  selectedSeat: any;
}

const TicketBookingSeat: React.FC<TicketBookingSeatProps> = ({
  selectedSeat,
}) => {
  const [seat, setSeat] = React.useState<string[]>([]);
  const letter = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const number = [1, 2, 3, 4, 5, 6, 7, 8];

  const [loading, setLoading] = React.useState<boolean>(false);

  console.log(seat);
  console.log(selectedSeat);
  const resetSeat = async () => {
    await store.set("seat", []);
  };

  const router = useHistory();

  //Handle start process
  const handleOnClickProcessTicket = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    //Data local here
    const location = await store.get("location");
    const cinemaLocation = await store.get("cinema_location");
    const datetime = await store.get("date_booking");
    const timebook = await store.get("time_booking");
    const seatdata = await store.get("seat");
    //Print for test
    console.log(location);
    console.log(cinemaLocation);
    console.log(datetime);
    console.log(timebook);
    console.log(seatdata);
    if (datetime == null) {
      toast.error("Vui lòng chọn ngày xem", {
        duration: 1000,
      });
    } else if (timebook == null) {
      toast.error("Vui lòng chọn giờ xem!", {
        duration: 1000,
      });
    } else if (seatdata.length == 0) {
      toast.error("Bạn chưa chọn vị trí ghế!", {
        duration: 1000,
      });
    } else {
      router.push("/payment");
    }
  };

  useEffect(() => {
    resetSeat();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-base mb-2">Select Seat</p>
      <div className="grid grid-cols-3 mb-4 w-full items-center justify-items-center gap-5 ">
        <div className="text-xs col-span-1 flex ">
          <input
            type="checkbox"
            readOnly
            className="appearance-none border w-4 h-4 mr-2 bg-slate-700  border-slate-700"
          />{" "}
          Available
        </div>
        <div className="text-xs col-span-1 flex">
          <input
            type="checkbox"
            readOnly
            checked
            className="appearance-none custom-checkbox bg-slate-700 border-slate-700 border w-4 h-4 mr-2"
          />{" "}
          Your Choice
        </div>
        <div className="text-xs col-span-1 flex">
          <input
            type="checkbox"
            readOnly
            className="appearance-none border w-4 h-4 mr-2 bg-rose-500 border-slate-400"
          />{" "}
          Selected
        </div>
      </div>
      {/* screen section */}
      <div className="flex justify-center items-center w-full">
        <div className="relative screen bg-clip-padding bg-rose-400 h-12 w-2/3 rounded-t-full shadow-2xl shadow-slate-400 mb-8"></div>
      </div>
      <p className="text-xs text-center text-white text-md font-bold block mb-4">
        Screen
      </p>
      {/*Seat selection */}
      {loading ? (
        <div>
          <a>Loading....</a>
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full items-center justify-items-center grid grid-cols-10 gap-1">
            {/*Seat horizontal label*/}
            <div className="col-span-1">
              {letter.map((l, index) => (
                <div key={index}>{l}</div>
              ))}
            </div>
            {/*Seat select*/}
            {number.map((l, index) => (
              <div className="w-full flex flex-col items-center" key={index}>
                {letter.map((n, index1) => {
                  const isSelected = selectedSeat.includes(`${n}${l}`);
                  return (
                    <div
                      className="row-span-1"
                      key={(1 + index) * (1 + index1)}
                    >
                      <input
                        type="checkbox"
                        disabled={isSelected}
                        defaultChecked={false}
                        className={`appearance-none custom-checkbox w-4 h-4  ${
                          isSelected ? "bg-rose-500" : "bg-slate-700"
                        } border border-slate-400`}
                        value={`${n}${l}`}
                        onChange={async (
                          e: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          const location = await store.get("location");
                          const cinemaLocation = await store.get(
                            "cinema_location"
                          );
                          const datetime = await store.get("date_booking");
                          const timebook = await store.get("time_booking");

                          if (
                            location == null ||
                            cinemaLocation == null ||
                            datetime == null ||
                            timebook == null
                          ) {
                            e.target.checked = false;
                          } else {
                            console.log(location);
                            console.log(cinemaLocation);
                            console.log(datetime);
                            console.log(timebook);
                            if (e.target.checked) {
                              await store.set("seat", [
                                ...seat,
                                e.target.value,
                              ]);

                              setSeat([...seat, e.target.value]);
                            } else {
                              await store.set(
                                "seat",
                                seat.filter((items) => items !== e.target.value)
                              );
                              setSeat(
                                seat.filter((items) => items !== e.target.value)
                              );
                            }
                          }
                        }}
                      ></input>
                    </div>
                  );
                })}
              </div>
            ))}
            {/*Seat horizontal label*/}
            <div className="col-span-1">
              {letter.map((l, index) => (
                <div key={index}>{l}</div>
              ))}
            </div>
          </div>
          {/*Seat veritcal label*/}
          <div className="grid grid-cols-10 w-full items-center justify-items-center">
            <div className="col-span-1"></div>
            {number.map((l, index) => (
              <div key={index}>{l}</div>
            ))}
            <div className="col-span-1"></div>
          </div>
        </div>
      )}
      {/* Sumarize seat & price */}
      <div className="grid grid-cols-12 items-center justify-items-center w-full my-4">
        <div className="col-span-2"></div>
        <div className="grid justify-items-center col-span-4 h-12 border border-slate-600 w-full">
          <h1 className="text-rose-600 font-semibold">Seat</h1>
          <div className="flex gap-2">
            {seat?.map((place, index) => {
              if (index >= 2) {
                return;
              }
              return (
                <p className="border border-slate-200" key={index}>
                  {place}
                </p>
              );
            })}
            {seat.length > 2 && <p>...</p>}
          </div>
        </div>
        <div className="grid justify-items-center col-span-4 h-12 border border-slate-600 w-full">
          <h1 className="text-rose-600 font-semibold">Sub-Total</h1>
          <p>${seat.length * 500}</p>
        </div>
        <div className="col-span-2"></div>
      </div>
      {/*Button Process */}
      <button
        className="w-full bg-rose-500 font-semibold p-2.5 mb-4 rounded-md active:scale-90 transition-all duration-300 ease-in-out"
        onClick={handleOnClickProcessTicket}
      >
        Process
      </button>
    </div>
  );
};

export default TicketBookingSeat;
