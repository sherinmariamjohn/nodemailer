const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sherinmariam325@gmail.com',
    pass: 'pandqwtxomgwhvnx'
  }
});

const mailOptions = {
  from: 'sherinmariam325@gmail.com',
  to: 'ashin209@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'This is the email for learning!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});