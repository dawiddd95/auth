const {check} = require('express-validator');

module.exports = {
   signupValidationSchema: [
      check('name')
         .not().isEmpty()
         .isLength({min: 3})
         .withMessage('Minimum 3 characters')
         .escape(),
      check('surname')
         .not().isEmpty()
         .isLength({min: 3})
         .withMessage('Minimum 3 characters')
         .escape(),
      check('email', 'Must be correct email format')
         .not().isEmpty()
         .isEmail().normalizeEmail()
         .escape(),
      check('password', 'Must contain: minimum 8 characters, one numeric and one special character')
         .not().isEmpty()
         .isLength({min: 8})
         .matches(/^(?=.*[A-Z])/)
         .matches(/^(?=.*[0-9])/)
         .matches(/^(?=.*[!@#\$%\^&])/)
         .escape(),
      check('confirmPassword', 'Must match password')
         .escape()
         .custom((value, {req}) => (value === req.body.password)),   
   ]
}