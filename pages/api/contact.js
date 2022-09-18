import mail from "@sendgrid/mail";
mail.setApiKey(process.env.SENDGRID_API_KEY);
//object storing information on how we want to send our emails
//PORT 465 FOR SMTP communication

export default async function (req, res) {
  /* let nodemailer = require("nodemailer"); */
  const body = req.body;

  const mailData = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}\r\n
  `;

  const data = {
    to: "leratomokgwabona@gmail.com",
    from: "leratomokgwabona@gmail.com",
    subject: "Portfolio Mail!",
    text: mailData,
    html: mailData.replace(/\r\n/g, "<br/>"),
  };

  mail.send(data);

  res.status(200).json({ msg: "great!" });
}
