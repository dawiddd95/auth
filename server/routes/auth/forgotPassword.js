const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const User = require('../../models/userSignupSchema');
const emailSettings = require('../../utils/emails/forgotPassword');
const {transporter} = require('../../utils/emails/transporter');

router.post('/api/auth/forgot-password', (req, res) => {
   const {email} = req.body; 
   const newPassword = `#${uuid.v4()}`;
   const hash = bcrypt.hashSync(newPassword, 10);
   const options = emailSettings(email, newPassword);
   
   User.findOneAndUpdate({email, active: true}, {password: hash}, (err, data) => {
      if(data !== null) {    
         transporter.sendMail(options.mailOptions, (error, response) => {
            if(error) console.log(error);
            else console.log("Message sent: " + response.message);
         });
         res.json({success: true, text: 'Password reset email sent successfully'})      
      } else {
         res.json({success: false, text: `Sorry, we don't recognize your credentials`})
      }
   }); 
})

module.exports = router;