import supabase from "../../config/supabase/supabase";
import store from "../../config/storage/IonicStorage";

import TicketGetDTO from "../../dtos/TicketGetDTO";
import { CURRENT_USER, TICKET } from "../../utils/SharedValues";

export const GetSelectedSeat = async () => {
  // const value = await store.get(CURRENT_USER);
  const userId = await store.get(CURRENT_USER).then((value) => {
    return value!.id;
  });
  const movieId = await store.get(TICKET.MOVIE_ID);
  const location = await store.get(TICKET.LOCATION);
  const cinemaLocation = await store.get(TICKET.CINEMA_LOCATION);
  const datetime = await store.get(TICKET.DATE_BOOKING);
  const timebook = await store.get(TICKET.TIME_BOOKING);
  // //handle convert date
  // const dateBooking = new Date(datetime);

  // // Get the year, month, and day of the UTC date
  // const year = dateBooking.getUTCFullYear();
  // const month = dateBooking.getUTCMonth() + 1;
  // const day = dateBooking.getUTCDate() + 1;

  // // Format the date as 11-15-2023
  // const formattedDate = `${month}-${day}-${year}`;
  // console.log("formatted date:", formattedDate);

  console.log("preparing to get selected seat with params: ", {
    userId,
    movieId,
    location,
    cinemaLocation,
    timebook,
    datetime,
  });

  let { data, error } = await supabase
    .from("tbl_ticket")
    .select("seat")
    .eq("user_id", userId)
    .eq("movie_id", movieId)
    .eq("cinema_location", cinemaLocation)
    .eq("booking_time", timebook)
    .eq("booking_date", datetime)
    .eq("location", location);

  if (error) {
    console.log("error", error);
  }

  var listResult: any = [];



  if (data != null) {
    listResult = JSON.parse(data[0].seat);
  }
  console.log("data result", data);

  console.log("list seat: ", listResult);
  await store.set("selected-seat", listResult);
  return listResult;
};
