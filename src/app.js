import express, { request, response }  from 'express';
import { port } from "./config/index.js";
import  router  from './routes/index.js';
import morgan from 'morgan';
import cors from 'cors';



const app= express();
app.use(morgan('tiny'));

//Route get query 
app.use('/search',router);
app.use('/videos',router);
app.use(cors());


//config server
app.listen(port, (error)=> {
    if (error) {
     console.log('Server error: Failed') 
     process.exit(1);
    }
    console.log(`Server listening in port ${port}`)
  
  })