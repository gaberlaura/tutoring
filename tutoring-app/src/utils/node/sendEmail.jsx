const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gaberlaura42@gmail.com', //Sender email
    pass: 'obqi jmby nrqz mcyj' //Sender password
  }
});

//Create email options
const mailOptions = {
  from: 'gaberlaura42@gmail.com', // Sender email
  to: 'snowfntsy@gmail.com', //recipient
  subject: 'Test Email', // Subject line
  text: 'Hello, this is a test email!' // Plain text body
  //Can also use 'html' key for HTML formatted emails
};

//Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});