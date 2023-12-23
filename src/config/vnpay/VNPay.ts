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

// get payment url with params (will return a url, redirect to this url to make payment), required params: amount, orderInfo, orderType, bankCode (optional)

export const getPaymentUrl = async (amount: number, orderID: string, ipAddr: string) => {
  const data = await vnpayInstance.buildPaymentUrl({
    vnp_Amount: amount * 100,
    vnp_IpAddr:  ipAddr,
    vnp_TxnRef: orderID,
    vnp_OrderInfo: "Thanh toan don hang",
  });
  return data;
}

// verify return url, return data if success, return false if fail, dungf khi thanh toan xong thi tra ve trang thai thanh toan la gi (thanh cong, that bai, huy don hang) de xu ly tiep o backend cua minh (khong phai backend cua vnpay) 
export const verifyReturnUrl = async (query: any): Promise<any> => {
  const data = await vnpayInstance.verifyReturnUrl(query);
  return data;
}
