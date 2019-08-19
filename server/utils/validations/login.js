const {check} = require('express-validator');

module.exports = {
   loginValidationSchema: [
      check('email', 'Must be correct email format')
         .not().isEmpty()
         .isEmail().normalizeEmail()
         .escape(),
      check('password', 'Wrong email or password')
         .not().isEmpty()
         .isLength({min: 8})
         .matches(/^(?=.*[A-Z])/)
         .matches(/^(?=.*[0-9])/)
         .matches(/^(?=.*[!@#\$%\^&])/)
         .escape(),
   ]
}