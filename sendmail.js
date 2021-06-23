var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'meghana@gmail.com',
    pass: '*********'//use your password
  }
});



var mailOptions = {
  from: 'meghana@gmail.com',
  to: 'meghana89@gmail.com',
  subject: 'Sending Email using nodemailer',
  text: 'Hello!',
};



transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

//npm install nodemailer
