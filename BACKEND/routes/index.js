const express=require('express');

const routes=express.Router();

routes.post('/register',( req, res)=>{
    res.send('registration success')
});

routes.post('/login',(req, res)=>{
    res.send('login success')
});

module.exports=routes;