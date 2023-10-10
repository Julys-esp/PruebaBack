import express, { request, response }  from 'express';
import { port } from "./config/index.js";

import morgan from 'morgan';

const app= express();
app.use(morgan('tiny'));

app.listen(port, (error)=> {
    if (error) {
     console.log('Server error: Failed') 
     process.exit(1);
    }
    console.log(`Server listening in port ${port}`)
  
  })