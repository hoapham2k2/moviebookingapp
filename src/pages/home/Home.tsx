import store from "../../config/storage/IonicStorage";
import { useEffect, useState } from "react";
import HeaderSection from "./components/header-section/HeaderSection";
import PreviewSection from "./components/preview-section/PreviewSection";
import React from "react";
import supabase from "../../config/supabase/supabase";
import {
  Notice,
  insertNotice,
  setNotices,
} from "../../features/notices/noticeSlice";
import { useDispatch } from "react-redux";
import FetchAllNoticesFirst from "../../services/notices/FetchAllNoticesFirst";
const Home: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const setmyNotice = async () => {
      await FetchAllNoticesFirst().then((res: Notice[]) => {
        dispatch(setNotices(res));
      });
    };
    setmyNotice();
  }, []);

  React.useEffect(() => {
    const tblNotification = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "tbl_notification" },
        (payload) => {
          console.log("Change received!", payload);
          const myNotice: Notice = new Notice();
          myNotice.id = payload.new.id.toString();
          myNotice.content = payload.new.text;
          myNotice.userId = payload.new.user_id;
          myNotice.createdAt = payload.new.created_at;
          dispatch(insertNotice(myNotice));
        }
      )
      .subscribe();
  }, []);

  return (
    <div className="w-full h-full">
      <HeaderSection />
      <div className="h-full w-full px-4 py-2 flex flex-col gap-4">
        <PreviewSection name="New Releases" />
        <PreviewSection name="Popular in cinemas" />
        <PreviewSection name="Recommended for you" />
      </div>
    </div>
  );
};

export default Home;
