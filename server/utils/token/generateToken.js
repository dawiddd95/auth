const jwt = require('jsonwebtoken');

const generateToken = (email, id) => {
   const userData = { email, id };

   const token = jwt.sign(userData, 'my secret key', {
      expiresIn: 60000 // expires in 60 sec
   })

   return token;
}

module.exports = generateToken;

// co powinno byc w .env
// PORT=65534
//DB_CONN="mongodb://react-cosmos-db:swQOhAsVjfHx3Q9VXh29T9U8xQNVGQ78lEQaL6yMNq3rOSA1WhUXHTOcmDf38Q8rg14NHtQLcUuMA==@react-cosmos-db.documents.azure.com:10255/?ssl=true&replicaSet=globaldb"
//SECRET_KEY="b6264fca-8adf-457f-a94f-5a4b0d1ca2b9"

// Tworzymy process.env.JWT_SECRET   
// 1. W root robimy npm i dotenv -S
// 2. W folderze root czyli poza client i server tworzymy plik .env
// 3. Wklejamy nasz JWT_SECRET => JWT_SECRET = "53d5ddf6-4a6b-40c8-91e2-1f55ba62d52a"
// 4. dodajemy .env to gitignore file
// 5. Konfigurujemy zmienne środowiskowe na serverze: 
// wklej require("dotenv").config(); w server.js tuż pod const app = express();
// 6. importujemy do server.js => const expressJwt = require('express-jwt');
// 7. dodajemy  do server.js   app.use("/api lub /api/user/", expressJwt({secret: process.env.JWT_SECRET}));  
// 8.