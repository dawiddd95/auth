const express = require('express');
const router = express.Router();

const User = require('../../models/userSignupSchema');

router.get('/auth/verify', (req, res) => {
   const {id, apiKey} = req.query;
   const host = req.get('host');
   const link = `${req.protocol}://${host}`;

   if(link === `http://${host}`) {
      User.findOneAndUpdate({_id: id, key: apiKey, active: false}, {active: true}, (err, data) => {
         if(data !== null) {
            res.sendFile('email-verified.html', {root: './public'});
         } else {
            res.sendFile('email-expired.html', {root: './public'});
         }
      })
   }
})

module.exports = router;