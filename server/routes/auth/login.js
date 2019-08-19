// Robic od :
// How I set up React and Node with JSON Web Token for Authentication  =>  od Server Side
// A Practical Guide for JWT Authentication using Nodejs and Express  => od obrazku flow

// TYAJ SIE CHYBA WERYFIKUJE TOKEN
// -----------------------------------------------

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/userSignupSchema');
const {loginValidationSchema} = require('../../utils/validations/login');
const generateToken = require('../../utils/token/generateToken');

router.post('/api/auth/login', loginValidationSchema, (req, res) => {
   const {email, password} = req.body;

   User.findOne({email, active: true}, (err, data) => {
      User.findOne({email, active: true}, (err, data) => {
         if(data !== null) {
            bcrypt.compare(password, data.password, (err, result) => {
               if(result) {
                  const token = generateToken(data.email, data.id);
                  res.json({success: true, err: '', id: data._id, token})
               }
               else res.json({success: false, err: 'Wrong user or password', id: ''})
            })
         } else {
            res.json({success: false, err: 'Wrong user or password', id: ''})
         }
      }); 
   }); 
})

module.exports = router;

// bcrypt.compare(req.body.password, user.password, <-- check pwd         
//    function(err, valid) {
//      if (!valid) {
//       return res.status(404).json({
//               error: true,
//               message: ‘Username or Password is Wrong’
//       });
//      }

//    var token = utils.generateToken(user); <-- Generate token
//    user = utils.getCleanUser(user);
//    res.json({
//       user: user,    <--- Return both user and token
//       token: token
//    });
// });