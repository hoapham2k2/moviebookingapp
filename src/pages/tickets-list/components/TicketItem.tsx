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
}

const TicketItem = ({}) => {
  return (
    <div className="border border-slate-700 my-12 rounded-3xl">
      <div className="flex flex-col justify-center w-full my-4">
        <div className="grid grid-cols-5 border border-slate-700 rounded-3xl p-4 mx-4 my-1">
          <div className="col-span-2">
            <img className="w-24 h-36 bg-slate-400"></img>
          </div>
          <div className="col-span-3">
            <h1 className="font-semibold text-xl leading-10 mb-2">Title</h1>
            <p className="text-slate-400 text-sm mb-2">Film Genre</p>
            <p className="text-slate-400 text-sm mb-2">Estimate time</p>
            <p className="text-slate-400 text-sm mb-2">Language, Quality</p>
            <p className="text-slate-400 text-sm mb-2">Classic Ticket</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border border-slate-700 rounded-3xl p-4 mx-4 my-1">
          <div className="flex flex-col w-full mb-2">
            <h3 className="text-sm text-slate-500 mb-1">Cinema</h3>
            <p>Thủ Đức GigaMall Cinema</p>
          </div>
          <div className="flex justify-between gap-3 w-full">
            <div className="flex flex-col">
              <h3 className="text-sm text-slate-500 mb-1">Date</h3>
              <p className="text-base">Nov 20, 2021 </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm text-slate-500 mb-1">Seat</h3>
              <p className="text-base">F4, F5</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm text-slate-500 mb-1">Start</h3>
              <p className="text-base">5:40PM</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm text-slate-500 mb-1">End</h3>
              <p className="text-base">7:20PM</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border border-slate-700 rounded-3xl p-4 mx-4 my-1">
          <div className="flex flex-col w-full mb-2">
            <h3 className=" mb-1">Ticket</h3>
            <div className="flex justify-between">
              <p className="text-sm text-slate-500">Classic ticket x2</p>
              <p>$1000</p>
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
              <p>$1050</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
