const express=require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const app=express();
require('dotenv').config();
require('./config/db');
const PORT=process.env.PORT || 3000;
app.use(bodyParser.json());
app.use('/api/v1',routes);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
