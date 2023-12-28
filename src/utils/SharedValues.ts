const CURRENT_USER = "currentUser";
const ROUTES = {
  HOME: "/home",
  TICKETS_LIST: "/tickets-list",
  WISH_LIST: "/wishlist",
  PROFILE: "/profile",
  HOME_DETAIL: "/home/:id",
  TICKET_DETAIL: "/home/ticket/movieId=:id",
  UPDATE_PASSWORD: "/update-password",
  PAYMENT: "/payment",
  PAYMENT_STATUS: "/paymentStatus",
};

const TICKET = {
  TIME_BOOKING: "booking_time",
  DATE_BOOKING: "booking_date",
  LOCATION: "location",
  CINEMA_LOCATION: "cinema_location",
  SEAT: "seat",
  MOVIE_ID: "movie_id",
};

const CURRENT_TICKET = "currentTicket";

export { CURRENT_USER, ROUTES, TICKET, CURRENT_TICKET };
