const email = require('express').Router();
const nodemailer = require('nodemailer');
const dayjs = require('dayjs');
var { mongoose } = require('../db/mongoose');
const { ContactEmail } = require('../models/contactEmail');

email.post('/', (req, res) => {

  const sentDate = dayjs(new Date);

  const contactEmail = new ContactEmail({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
    date: sentDate
  });

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
    to: 'ryan@mackwebhosting.com', // Passenger info from reservation (REQ)
    subject: 'Contact Us Form - Mackweb Development ', // Subject line
    text: 'Contact Us Form - Mackweb Development', // plaintext body
    html: '<h2>Contact Form Information:</h2><p>Name: '+ req.body.name + '</p><p>Email: '+req.body.email+'</p><p>Phone: '+req.body.phone+'</p><p>Message: '+req.body.message+'</p>'
  };

  contactEmail.save()
    .then((doc) => {
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      // console.log(error);
      return res.status(400).send(error);
    }
    // console.log('Message sent: ' + info.response);
    res.send({Message: 'Message sent: ' + info.response});

  })
  }, (e) => {
    res.status(400).send(e);
  });





});

module.exports = email;
