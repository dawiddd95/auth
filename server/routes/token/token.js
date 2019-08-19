const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/api/token', (req, res, next) => {
   const header = req.headers['authorization'];

   if(typeof header !== 'undefined') {
      const bearer = header.split(' '); // => zwróci np: ['Bearer', 'jh3uj3jedjd3']
      const token = bearer[1];

      req.token = token;
   } else {
      //If header is undefined return Forbidden (403)
      res.sendStatus(403)
   }

   jwt.verify(req.token, 'my secret key', (err, authorizedData) => {
      if(err){
          //If error send Forbidden (403)
          console.log('ERROR: Could not connect to the protected route');
          res.sendStatus(403);
      } else {
          //If token is successfully verified, we can send the autorized data 
          res.json({
              message: 'Successful log in',
              authorizedData
          });
          console.log('SUCCESS: Connected to protected route');
      }
   })

   // User.findOne({email, active: true}, (err, data) => {
   //    User.findOne({email, active: true}, (err, data) => {
   //       if(data !== null) {
   //          bcrypt.compare(password, data.password, (err, result) => {
   //             if(result) {
   //                const token = generateToken(data.email, data.id);
   //                res.json({success: true, err: '', id: data._id, token})
   //             }
   //             else res.json({success: false, err: 'Wrong user or password', id: ''})
   //          })
   //       } else {
   //          res.json({success: false, err: 'Wrong user or password', id: ''})
   //       }
   //    }); 
   // }); 
})

module.exports = router;