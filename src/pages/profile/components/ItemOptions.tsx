import { UserCircleIcon } from "@heroicons/react/24/solid";
import React, { ReactEventHandler } from "react";
import store from "../../../config/storage/IonicStorage";
import { logoutUser } from "../../../services/authentication/Authentication";
import toast from "react-hot-toast";
import handleLogOut from "../utils/Logout";
import supabase from "../../../config/supabase/supabase";
import UploadAvatar from "../../../services/files/UploadAvatar";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
import NotificationsDrawer from "../utils/NotificationsDrawer";
import { set } from "react-hook-form";

type Props = {
  displayName: string;
  icon: React.ReactNode;
  index: number;
  changeImgSrc?: React.Dispatch<React.SetStateAction<string>>;
  setUpload?: React.Dispatch<React.SetStateAction<boolean>>;
};

const ItemOptions = (props: Props) => {
  const [file, setFile] = React.useState<File | null>(null);
  const notices = useSelector((state: any) => state.notice.notices);
  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
  const handleOnClick = (index: Number): any => {
    switch (index) {
      case 0:
        return () => {
          console.log("notification");
          setIsOpenDrawer(!isOpenDrawer);
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
      <NotificationsDrawer isOpen={isOpenDrawer} listNotices={notices} />
      <div className="relative flex ">{props.icon}</div>
      {props.index === 0 && (
        <Badge badgeContent={notices.length} color="primary"></Badge>
      )}
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
