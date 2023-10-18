import express from 'express'
import route from './src/route/index.js';
const app=express();
app.use(express.json());
app.use('/',route)
app.listen(8001,()=>{console.log(`port listen into ${8001}`);})

