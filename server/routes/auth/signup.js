// TUTAJ SIE CHYBA TWORZY TOKEN !!!!!!!!!!!!!!!!!!!!!11
// ---------------------------------------------------------

// (Wyślemy również JWT podczas rejestracji, aby nie musieli wprowadzać tych samych danych logowania dwa razy).

const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const User = require('../../models/userSignupSchema');
const {signupValidationSchema} = require('../../utils/validations/signup');
const emailSettings = require('../../utils/emails/verifyEmail');
const {transporter} = require('../../utils/emails/transporter'); //dajemy w obiekt jesli chcemy uzyc funkcji dla tego obiektu

router.post('/api/auth/signup', signupValidationSchema, (req, res) => {
   const {name, surname, email, password, active} = req.body;

   const key = uuid.v4();
   const userID = new User()._id;
   const link = `http://${req.get('host')}/auth/verify?id=${userID}&apiKey=${key}`;
   const options = emailSettings(email, link);
   const errors = validationResult(req);

   if(errors.isEmpty()) {
      User.findOne({email}, (err, data) => {
         if(data === null) {
            transporter.sendMail(options.mailOptions, (error, response) => {
               if(error) console.log(error);
               else {
                  bcrypt.hash(password, 10, (err, hashPassword) => {
                     const signupUser = new User({
                        _id: userID, name, surname, email, active, key, password: hashPassword
                     });

                     signupUser.save(err => console.log(err))
                  })
               }
            });
            res.json({success: true, err: '', email})      
         } else {
            res.json({success: false, err: 'Email is already in usage', email: ''})
         }
      });
   } else {
      return res.status(422).jsonp(errors.array()); 
   }
})

module.exports = router;