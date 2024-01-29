const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const helmet = require('helmet');

const connectDB = require('./config/db.js');
const Leaderboard = require('./routes/leaderboard.js');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Connect to Database
connectDB();

// Define Routes
app.use('/api', Leaderboard);

app.use(express.static('build'));

app.get('*', (req, res) => {

});

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
