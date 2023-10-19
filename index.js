import express from 'express'
import route from './src/route/index.js';
const app=express();
app.use(express.json());
app.use('/',route)
const PORT=process.env.PORT;
app.listen(PORT,()=>{console.log(`port listen into ${PORT}`);})

