import supabase from "../../config/supabase/supabase";
import store from "../../config/storage/IonicStorage";

import TicketGetDTO from "../../dtos/TicketGetDTO";
import { CURRENT_USER } from "../../utils/SharedValues";

export const GetSelectedSeat = async () => {
  const value = await store.get(CURRENT_USER);
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

  console.log("preparing to get selected seat with params: ", {
    userId,
    movieId,
    location,
    cinemaLocation,
    timebook,
    formattedDate,
  });

  let { data, error } = await supabase
    .from("tbl_ticket")
    .select("seat")
    .eq("user_id", userId)
    .eq("movie_id", movieId)
    .eq("cinema_location", cinemaLocation)
    .eq("booking_time", timebook)
    .eq("booking_date", formattedDate)
    .eq("location", location);

  if (error) {
    console.log("error", error);
  }

  var listResult: any = [];

  if (data != null) {
    for (let i = 0; i < data!.length; i++) {
      listResult = listResult.concat(data![i]["seat"].split(","));
    }
  }

  console.log("list seat: ", listResult);
  await store.set("selected-seat", listResult);
  return listResult;
};
