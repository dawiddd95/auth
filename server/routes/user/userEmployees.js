const express = require('express');
const router = express.Router();

const Users = require('../../models/userSignupSchema');

router.get('/api/user/:id/userEmployees', (req, res) => {
   const {id} = req.params;
   
   Users.findOne({_id: id}, (err, data) => {
      const employeesList = [
         {name: 'Jarosław', surname: 'Lis', age: 32, worksite: 'magazynier'},
         {name: 'Agata', surname: 'Korzeń', age: 26, worksite: 'Księgowa'},
      ]

      res.json({employeesList})      
   });
})

module.exports = router;