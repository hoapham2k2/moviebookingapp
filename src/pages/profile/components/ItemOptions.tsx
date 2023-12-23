import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import store from "../../../config/storage/IonicStorage";
import { logoutUser } from "../../../services/authentication/Authentication";
import toast from "react-hot-toast";
import handleLogOut from "../utils/Logout";
import supabase from "../../../config/supabase/supabase";
import UploadAvatar from "../../../services/files/UploadAvatar";

type Props = {
  displayName: string;
  icon: React.ReactNode;
  index: number;
  imgRef?: React.RefObject<HTMLImageElement>;
};

const ItemOptions = (props: Props) => {
  const handleOnClick = (index: Number): any => {
    switch (index) {
      case 0:
        return () => {
          console.log("notification");
        };
      case 1:
        return () => {
          console.log("setting");
        };
      case 2:
        return () => {
          console.log("change profile");
        };
      case 3:
        return () => {
          console.log("history");
        };
      case 4:
        return () => {
          handleLogOut();
        };
      default:
        return () => {
          console.log("default");
        };
    }
  };
  return (
    <>
      <div
        className="col-span-2 flex p-2 rounded-lg border border-slate-600 bg-slate-950 "
        onClick={handleOnClick(props.index)}
      >
        <div className="relative flex ">{props.icon}</div>
        <p className="text-lg">{props.displayName}</p>
        {
          //check if displayName = "change profile" or index = 2 then show file input to change profile

          props.displayName == "Change Profiles" || props.index == 2 ? (
            <input
              type="file"
              accept="image/*"
              className="absolute top-0 left-0 w-full h-full opacity-0"
              onChange={async (e) => {
                console.log(e.target.files);
                // @ts-ignore
                const file = e.target.files[0];
                await UploadAvatar(file).then((res) => {
                  console.log(res);
                  // @ts-ignore
                  props.imgRef.current.src = res;
                });
              }}
            />
          ) : (
            ""
          )
        }
      </div>
      <div className="col-span-2"></div>
    </>
  );
};

export default ItemOptions;
