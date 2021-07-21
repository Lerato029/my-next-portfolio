import nodemailer from "nodemailer";
//object storing information on how we want to send our emails
//PORT 465 FOR SMTP communication
export default async (req, res) => {
  /* let nodemailer = require("nodemailer"); */
  const transporter = await nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "portfoliobylerato@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: "portfoliobylerato@gmail.com",
    to: "lerato.m029@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
  };
  await transporter.sendMail(mailData, (err, info) => {
    if (info) {
      res.json({ msg: "great!" });
    }
  });
};
