import supabase from "../../config/supabase/supabase";
import store from "../../config/storage/IonicStorage";

import TicketGetDTO from "../../dtos/TicketGetDTO";

export const GetSelectedSeat = async () => {
  const value = await store.get("myUser");
  const userId = value["id"];
  const movieId = await store.get("movie_id_booking");
  const location = await store.get("location");
  const cinemaLocation = await store.get("cinema_location");
  const datetime = await store.get("date_booking");
  const timebook = await store.get("time_booking");
  //handle convert date
  const dateBooking = new Date(datetime);

  // Get the year, month, and day of the UTC date
  const year = dateBooking.getUTCFullYear();
  const month = dateBooking.getUTCMonth() + 1;
  const day = dateBooking.getUTCDate() + 1;

  // Format the date as 11-15-2023
  const formattedDate = `${month}-${day}-${year}`;
  console.log("formatted date:", formattedDate);

  let { data, error } = await supabase
    .from("tbl_ticket")
    .select("seat")
    .eq("user_id", userId)
    .eq("movie_id", movieId)
    .eq("cinema_location", cinemaLocation)
    .eq("booking_time", timebook)
    .eq("booking_date", formattedDate)
    .eq("location", location);

  await store.set(
    "selected-seat",
    data!.length > 0 ? data![0]["seat"].split(",") : []
  );
  return data!.length > 0 ? data![0]["seat"].split(",") : [];
};
