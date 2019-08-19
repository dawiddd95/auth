const checkToken = (req, res, next) => {
   const header = req.headers['authorization'];

   if(typeof header !== 'undefined') {
      const bearer = header.split(' '); // => zwróci np: ['Bearer', 'jh3uj3jedjd3']
      const token = bearer[1];

      req.token = token;
      next();
   } else {
      //If header is undefined return Forbidden (403)
      res.sendStatus(403)
   }
}

module.exports = {checkToken}