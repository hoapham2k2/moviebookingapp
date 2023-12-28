const paymentURL = "https://moviebooking-payment-node.onrender.com";

export default function GetVNPayCheckoutUrl(orderId: string) {
  return `${paymentURL}?order_id=${orderId}`;
}
