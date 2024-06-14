let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "5808nidhipatel@gmail.com",
    pass: "12345",
  },
});

let sendEmail = (to, subject, data) => {
  return transporter.sendMail({
    from: '"test email" <5808nidhipatel@gmail.com>',
    to: to,
    subject: subject,
    html: data,
  });
};

module.exports = sendEmail;