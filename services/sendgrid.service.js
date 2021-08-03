const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const { Message } = require("../models/message");

const forwardEmail = (res, from, to, subject, text) => {
  sgMail
    .send(new Message(from, to, subject, text).content())
    .then((success) => {
      res.status(200);
      res.json({
        response: "Emails sent successfully",
      });
    })
    .catch((error) => {
      res.status(400);
      res.json({
        response: "Error while sending email",
        error: error.response.body,
      });
    });
};

module.exports = {
  forwardEmail,
};
