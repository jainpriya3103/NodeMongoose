// server.js

const express = require('express');
const app = express();
const port = 3000;


app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html'));
});

const CoinRouter = require('./routes/CoinRouter');

app.use('/coins', CoinRouter);


const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useCreateIndex: false,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/expressdemo', options);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
