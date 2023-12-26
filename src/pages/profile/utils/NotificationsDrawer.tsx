import { SwipeableDrawer } from "@mui/material";
import React, { ReactEventHandler } from "react";
import { Notice } from "../../../features/notices/noticeSlice";
import handleCreateAt from "../../../utils/HandleCreateAt";

type Props = {
  isOpen: boolean;
  listNotices: Notice[];
};

const NotificationsDrawer = (props: Props) => {
  return (
    <SwipeableDrawer
      anchor="right"
      open={props.isOpen}
      onClose={() => {
        console.log("close");
      }}
      onOpen={() => {
        console.log("open");
      }}
      sx={{
        "& .MuiDrawer-paper": {
          width: "70%",
          maxWidth: "100%",
          background: "transparent",
          border: "none",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          overflowY: "auto",
        },
      }}
    >
      {props.listNotices.map((notice: Notice) => {
        return <NotificationsDrawerItem Notice={notice} />;
      })}
    </SwipeableDrawer>
  );
};

type NotificationsDrawerItemProps = {
  Notice: Notice;
};

const NotificationsDrawerItem = (props: NotificationsDrawerItemProps) => {
  return (
    <div className="w-full bg-red-400 rounded-md px-2 py-1 flex flex-col text-white">
      <p className="top flex-1">
        <span>{props.Notice.content}</span>
      </p>
      <p className="bottom flex-1 text-right">
        <span className="text-xs">
          {handleCreateAt(props.Notice.createdAt)} by Admininstrator
        </span>
      </p>
    </div>
  );
};

export default NotificationsDrawer;
