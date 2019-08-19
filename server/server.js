const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const config = require('./config');

// zaimportowane pliki routów
const loginRouter = require('./routes/auth/login');
const signupRouter = require('./routes/auth/signup');
const verifyRouter = require('./routes/auth/verify');
const forgotPasswordRouter = require('./routes/auth/forgotPassword');
const loggedUserRouter = require('./routes/user/loggedUser');
const tokenRouter = require('./routes/token/token');

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)
mongoose.connect(config.db, {useNewUrlParser: true}, { useFindAndModify: false });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

require("dotenv").config();
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(
   path.join(__dirname, 'public')
));

// Używanie tych routów
app.use(loginRouter);
app.use(signupRouter);
app.use(verifyRouter);
app.use(forgotPasswordRouter);
app.use(loggedUserRouter);
app.use(tokenRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));