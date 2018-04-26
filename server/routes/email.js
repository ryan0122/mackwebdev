const email = require('express').Router();
const nodemailer = require('nodemailer');

email.post('/', (req, res) => {

  let smtpConfig = {
    pool: true,
    host: 'mail.mackwebhosting.com',
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: 'webmaster@mackwebhosting.com',
      pass: 'SuckADick2017'
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  };

  // create reusable transporter object using the default SMTP transport
  // var transporter = nodemailer.createTransport('smtps://webmaster@mackwebhosting.com:SuckADick2017@mail.mackwebhosting.com');
  var transporter = nodemailer.createTransport(smtpConfig);


// setup e-mail data with unicode symbols
var mailOptions = {
  from: '"Mackweb Development" <webmaster@mackwebhosting.com>', // sender address
  to: req.body.email, // Passenger info from reservation (REQ)
  // to: 'carlos.martin@blndspt.com, melissa.kerr@blndspt.com, steven.tate@blndspt.com, rick.fuller@blndspt.com', // Passenger info from reservation (REQ)
  subject: 'Thank you for contacting us ', // Subject line
  text: 'Thank you for contacting us', // plaintext body
  html: '<h2>Thank you for contacting us</h2>'
};

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      // console.log(error);
      return res.status(400).send(error);
    }
    // console.log('Message sent: ' + info.response);
    res.send('Message sent: ' + info.response);
  });

});

module.exports = email;
