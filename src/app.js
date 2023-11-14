import express, { request, response }  from 'express';
import { port } from "./config/index.js";
import  router  from './routes/index.js';
import mongoose from "mongoose"; 
import  { mongo_uri } from './config/index.js';
import morgan from 'morgan';
import cors from 'cors';


//Conexion Mongoose
mongoose.connect(mongo_uri);
const database=mongoose.connection;

database.on('error',(error=>{
  console.log(error);
}))

database.once('connected',()=>{
  console.log('Database Connected');
})

const app= express();
app.use(morgan('tiny'));


//Route get query 
app.use('/search',router);
app.use('/videos',router);
app.use(cors());
//Sapp.use(cors({ origin: 'http://127.0.0.1:5501', credentials: true, }));


//config server
app.listen(port, (error)=> {
    if (error) {
     console.log('Server error: Failed') 
     process.exit(1);
    }
    console.log(`Server listening in port ${port}`)
  
  })