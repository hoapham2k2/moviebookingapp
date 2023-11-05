import supabase from "../../config/supabase/supabase";
import TicketGetDTO from "../../dtos/TicketGetDTO";

//create a function with input value is movieId to insert data
export const InsertTicket = async (ticket: TicketGetDTO) => {
  console.log(ticket);
  const { data, error } = await supabase
    .from("tbl_ticket")
    .insert([
      {
        user_id: ticket.user_id,
        movie_id: ticket.movie_id,
        cinema_location: ticket.cinema_location,
        booking_time: ticket.booking_time,
        seat: ticket.seat,
        booking_date: ticket.booking_date,
        location: ticket.location,
        price: ticket.price,
      },
    ])
    .select();
};
