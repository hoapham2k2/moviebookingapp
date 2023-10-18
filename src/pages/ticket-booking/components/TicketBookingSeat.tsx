import React from "react";

type Props = {};

const TicketBookingSeat = (props: Props) => {
  const [seat, setSeat] = React.useState<string[]>([]);
  const letter = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const number = [1, 2, 3, 4, 5, 6, 7, 8];
  const selectedSeat: string[] = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
  ];
  console.log(seat);
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

      {/* seat section
      <div className="w-full grid grid-cols-8 gap-y-4">
        {
          // render seat
          letter.map((l, index) => {
            return (
              <div className="flex flex-wrap gap-1" key={index}>
                {number.map((n, index) => {
                  // check if seat is selected
                  const isSelected = selectedSeat.includes(`${l}${n}`);
                  console.log("isSelected", isSelected);
                  return (
                    // render check box in label tag
                    <label key={index}>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={isSelected}
                        onChange={() => {
                          if (isSelected) {
                            setSeat(seat.filter((item) => item !== `${l}${n}`));
                          } else {
                            setSeat([...seat, `${l}${n}`]);
                          }
                          console.log(seat);
                        }}
                      />
                      <div
                        className={`${
                          isSelected ? "bg-red-500" : "bg-green-500"
                        } w-6 h-6 rounded-md text-center text-white font-bold`}
                      >
                        {l}
                        {n}
                      </div>
                    </label>
                  );
                })}
              </div>
            );
          })
        }
      </div> */}

      {/*Seat selection test*/}
      <div className="w-full items-center justify-items-center grid grid-cols-10 gap-1">
        {/*Seat horizontal label*/}
        <div className="col-span-1">
          {letter.map((l, index) => (
            <div key={index}>{l}</div>
          ))}
        </div>
        {/*Seat select*/}
        {number.map((l, index) => (
          <div className="w-full flex flex-col items-center">
            {letter.map((n, index1) => {
              const isSelected = selectedSeat.includes(`${n}${l}`);
              return (
                <div className="row-span-1" key={(1 + index) * (1 + index1)}>
                  <input
                    type="checkbox"
                    disabled={isSelected}
                    className={`appearance-none custom-checkbox w-4 h-4  ${
                      isSelected ? "bg-rose-500" : "bg-slate-700"
                    } border border-slate-400`}
                    value={`${n}${l}`}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (e.target.checked) {
                        console.log(e.target.value);
                        setSeat([...seat, e.target.value]);
                      } else {
                        setSeat(
                          seat.filter((items) => items !== e.target.value)
                        );
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
      <button className="w-full bg-rose-500 font-semibold p-2.5 mb-4 rounded-md active:scale-90 transition-all duration-300 ease-in-out">
        Process
      </button>
    </div>
  );
};

export default TicketBookingSeat;
