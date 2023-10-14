// @ts-ignore
import nodemailer from "nodemailer";

const MY_GMAIL_ADDRESS = "sm6163457@gmail.com";
const MY_APP_PASSWORD = "htxh cbxn aooh cpeu";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MY_GMAIL_ADDRESS,
    pass: MY_APP_PASSWORD,
  },
  secure: true,
  host: "smtp.gmail.com",
});

export default transporter;
