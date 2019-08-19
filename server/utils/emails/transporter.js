const nodemailer = require('nodemailer');

module.exports = {
   transporter: nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: "company.managment.app.team@gmail.com",
         pass: "Dawidov121"
      }
   })
}