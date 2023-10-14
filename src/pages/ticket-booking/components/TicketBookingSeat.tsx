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

  return (
    <div>
      <p className="font-bold text-2xl"> Choose your seat</p>

      {/* screen section */}
      <div className="flex justify-center items-center">
        <div
          className="screen"
          style={{
            backgroundColor: "#fff",
            height: "70px",
            width: "100%",
            transform: "rotateX(45deg)",
            boxShadow: "0 3px 10px rgba(255, 255, 255, 0.7)",
          }}
        ></div>
      </div>
      <p className="text-center text-white text-md font-bold block">Screen</p>

      {/* seat section */}
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
      </div>
    </div>
  );
};

export default TicketBookingSeat;
