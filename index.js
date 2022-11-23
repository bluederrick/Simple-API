const dotenv = require('dotenv').config()
const winston = require ('./src/models/database_connnect.js')
const express = require ("express");
const app = express();
const morgan = require ('morgan');
const usermodel = require ('./src/models/schema.js')
const post_routers = require ('./src/controllers/users_route')
const mongoose = require('./src/models/database_connnect')
const routes = require ('./src/controllers/users_route');
const validation = require('./src/controllers/user_validate')
const body_parser = require('body-parser');


app.use(express.json() ,express.urlencoded({extended:true}), body_parser.json());
const cors = require ('cors')

const user_validate = require ('./src/controllers/user_validate.js')

const whitelist = "*";
const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
  app.use(morgan('dev'),
  cors(corsOptions))

app.listen (process.env.port || 5000 , ()=>{
    console.log(`server  is listening on port ${process.env.port}`) 
})










