
require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const auth = require('./api/routes/auth');
const port = process.env.PORT || 5000;
const test = require('./api/routes/test');
var cors = require('cors')

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors middleware
var whitelist = ['http://localhost:3000', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));

//DB config
const db = require('./config/keys').mongoURI;
//connect to mongodb
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('database connected'))
  .catch((err) => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);

//API ROUTES
app.use('/api/test', test);
app.use('/api/auth', auth);

//YOU CAN CREATE MORE API ROUTES HERE

app.listen(port, () => console.log(`Server Started at port ${port}`));
