import supabase from "../../config/supabase/supabase";
import TicketGetDTO from "../../dtos/TicketGetDTO";

export const GetAllCurrentTicket = async () => {
  const { data, error } = await supabase.from("tbl_ticket").select("*");
  return data;
};
