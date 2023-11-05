export default class TicketGetDTO {
  id: number = 0;
  created_at: Date = new Date();
  booking_time: string = "";
  order_id: number = 0; // foreign key
  seat: string = "";
  user_id: number = 0; // foreign key
  movie_id: number = 0; // foreign key
  cinema_location: string = "";
  booking_date: string = "";
  price: number = 0;
  location: string = "";
}
