const nodemailer = require('nodemailer');
const functions = require('firebase-functions');

exports.sendEmail = functions.https.onRequest((req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword',
      },
    });
    const mailOptions = {
      from: req.body.email,
      to: 'youremail@gmail.com',
      subject: 'New Form Submission',
      text: `Name: ${req.body.name}\n Email: ${req.body.email}\n Message: ${req.body.message}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  });