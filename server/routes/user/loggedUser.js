const express = require('express');
const router = express.Router();

const Users = require('../../models/userSignupSchema');

router.get('/api/user/:id/loggedUser', (req, res) => {
   const {id} = req.params;

   Users.findOne({_id: id}, (err, data) => {
      const loggedUser = {
         name: data.name,
         surname: data.surname,
         email: data.email,
      }
   
      res.json({loggedUser})      
   });
})

module.exports = router;