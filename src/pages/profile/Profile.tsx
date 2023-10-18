import React from "react";
import {
  ArrowRightCircleIcon,
  ArrowRightOnRectangleIcon,
  BellAlertIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const ProfilePage = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col mt-12 justify-center items-center mb-10">
        <img
          src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/07/lol-t1-1.jpg"
          className="bg-slate-700 border rounded-full w-28 h-28 object-cover"
        ></img>
        <p className="mt-2 text-sm text-slate-500">@leesanghyeok</p>
        <h1 className="text-lg">Lee Sang Hyeok</h1>
      </div>
      <div className="w-full px-4 py-2 grid grid-cols-2 active:scale-90 transition-all duration-300 ease-in-out">
        <div className="col-span-2 flex p-2 rounded-lg border border-slate-600 bg-slate-950 ">
          <div className="relative flex ">
            <BellAlertIcon className="w-6 h-6 mr-1" />
            <div className="absolute w-2 h-2 bg-rose-500 right-1 rounded-full"></div>
          </div>
          <p className="text-lg">Notifications</p>
        </div>
        <div className="col-span-2"></div>
      </div>
      <div className="w-full px-4 py-2 grid grid-cols-2 active:scale-90 transition-all duration-300 ease-in-out">
        <div className="col-span-2 flex p-2 rounded-lg border border-slate-600 bg-slate-950 ">
          <div className="relative flex ">
            <Cog6ToothIcon className="w-6 h-6 mr-1" />
          </div>
          <p className="text-lg">Settings</p>
        </div>
        <div className="col-span-2"></div>
      </div>
      <div className="w-full px-4 py-2 grid grid-cols-2 active:scale-90 transition-all duration-300 ease-in-out">
        <div className="col-span-2 flex p-2 rounded-lg border border-slate-600 bg-slate-950 ">
          <div className="relative flex ">
            <UserCircleIcon className="w-6 h-6 mr-1" />
          </div>
          <p className="text-lg">Change Profiles</p>
        </div>
        <div className="col-span-2"></div>
      </div>
      <div className="w-full px-4 py-2 grid grid-cols-2 active:scale-90 transition-all duration-300 ease-in-out">
        <div className="col-span-2 flex p-2 rounded-lg border border-slate-600 bg-slate-950 ">
          <div className="relative flex ">
            <CurrencyDollarIcon className="w-6 h-6 mr-1" />
          </div>
          <p className="text-lg">Your History Purchase</p>
        </div>
        <div className="col-span-2"></div>
      </div>
      <div className="w-full px-4 py-2 grid grid-cols-2 active:scale-90 transition-all duration-300 ease-in-out">
        <div className="col-span-2 flex p-2 rounded-lg border border-slate-600 bg-slate-950 ">
          <div className="relative flex ">
            <ArrowRightOnRectangleIcon className="w-6 h-6 mr-1" />
          </div>
          <p className="text-lg">Log out</p>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
