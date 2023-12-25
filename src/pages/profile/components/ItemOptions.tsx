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
  changeImgSrc?: React.Dispatch<React.SetStateAction<string>>;
  setUpload?: React.Dispatch<React.SetStateAction<boolean>>;
};

const ItemOptions = (props: Props) => {
  const [file, setFile] = React.useState<File | null>(null);

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
          const avatar = document.getElementById("avatar");
          avatar?.click();
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
    <div
      className="col-span-2 flex p-2 rounded-lg border border-slate-600 bg-slate-950 "
      onClick={handleOnClick(props.index)}
    >
      <div className="relative flex ">{props.icon}</div>
      <p className="text-lg">{props.displayName}</p>
      {props.index === 2 && (
        <input
          type="file"
          className="hidden"
          id="avatar"
          onChange={(e) => {
            UploadAvatar(
              e.target.files![0],
              props.changeImgSrc!,
              props.setUpload!
            );
            // @ts-ignore
            e.target.value = null;
          }}
        />
      )}
    </div>
  );
};

export default ItemOptions;
