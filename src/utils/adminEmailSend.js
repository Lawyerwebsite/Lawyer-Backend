const nodemailer = require("nodemailer");
require("dotenv").config()

const sendMailToLawyer = async (name, email, password) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.MAIL_ID,
      to: email,
      subject: "Welcome to our website",
      text: `Hello ${name},\n\nWelcome to our website.\n\nBest regards\nuserName: ${email}\npassword: ${password}`,
    };
    await transporter.sendMail(mailOptions);
    console.log(`Mail sended to ${email}\n\n${password}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  sendMailToLawyer,
};
