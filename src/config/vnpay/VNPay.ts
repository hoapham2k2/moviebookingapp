import { VNPay } from "vnpay";

const vnp_TmnCode = "2SSQ88M4";
const vnp_HashSecret = "NVPJRJWYZKKQBVHVDIOOGSPSTNYZOZRD";
const vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
const vnp_Returnurl = "/paymentReturn";
const vnp_apiUrl = "http://sandbox.vnpayment.vn/merchant_webapi/merchant.html";

// Create instance
const vnpayInstance = new VNPay({
  paymentGateway: "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html", //your payment gateway, default is sandbox
  tmnCode: vnp_TmnCode, // your tmn code
  secureSecret: "vnp_HashSecret", // your secure secret
  returnUrl: vnp_Returnurl, // return url
});
