var express = require("express");
var router = express.Router();

const { validateApiKey } = require("../auth/apiKeyValidatior");
const { forwardEmail } = require("../services/sendgrid.service");

router.get("/", (res) => {
  res.render("index", { title: "Express" });
});

router.post("/contactMe", validateApiKey, (req, res) => {
  forwardEmail(
    res,
    process.env.SENDGRID_SENDER_EMAIL,
    process.env.DEFAULT_RECEIVER,
    req.body.subject,
    req.body.text + "<br/><br/>" + req.body.email + "<br/>" + req.body.phone
  );
});

router.post("/sendEmailTo", validateApiKey, (req, res) => {
  forwardEmail(
    res,
    process.env.SENDGRID_SENDER_EMAIL,
    req.body.to,
    req.body.subject,
    req.body.text
  );
});

module.exports = router;
