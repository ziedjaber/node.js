const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zied****@gmail.com',
    pass: 'pwd******'
  }
});

var mailOptions = {
  from: 'bilel****@gmail.com',
  to: 'khaled*****@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hi!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});