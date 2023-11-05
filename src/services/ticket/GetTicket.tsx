import supabase from "../../config/supabase/supabase";
import store from "../../config/storage/IonicStorage";

import TicketGetDTO from "../../dtos/TicketGetDTO";

export const GetAllCurrentTicket = async () => {
  const value = await store.get("myUser");

  let { data, error } = await supabase
    .from("tbl_ticket")
    .select(
      "movie_id,cinema_location, booking_time, seat, price,booking_date, location, tbl_movie(id,title,duration,category,thumbnail,year,country,quality)"
    )
    //value["id"] is user_id, so we join two table favourite and movie with conditional user_id
    .eq("user_id", value["id"]);
  console.log(data);
  return data;
};
