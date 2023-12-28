/* 
  <summary>
    Modified by: Hoa Pham
    Modified on: 28-Dec-2023
    Description: Get VNPay checkout url for payment
  </summary>
  <param name="orderId">the order id to payment</param>
  <returns>Checkout url</returns>
*/
const paymentURL = "https://moviebooking-payment-node.onrender.com";
export default function GetVNPayCheckoutUrl(orderId: string) {
  return `${paymentURL}?order_id=${orderId}`;
}
