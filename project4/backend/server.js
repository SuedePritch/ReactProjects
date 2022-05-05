const express = require('express');
const dotenv = require("dotenv").config();
const colors = require("colors")
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const port = process.env.PORT || 5001;

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use('/api/meals', require('./routes/meals.routes.js'))
app.use('/api/users', require('./routes/user.routes'))
app.use(errorHandler)
app.listen(port, ()=>console.log(`Server running on PORT ${port}`.yellow))