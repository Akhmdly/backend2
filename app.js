const fs = require('fs');
const express = require('express');
const app = express();
fs.readFile("./data.json",'utf8',(err,data)=>{
    if(!err){
       
        mehsullar = JSON.parse(data);
        app.get('/',(req,res)=>{
            res.send('home page')
        })
        app.get('/mehsullar',(req,res)=>{
            res.send('mehsullar')
        })
        app.get('/mehsullar/:id',(req,res)=>{
            const mehsulId = req.params.id;
            const selected = mehsullar.find(mehsul=>mehsul.id == mehsulId)
           
            if(selected){
                res.send(selected)
            }
            else{
                res.status(404).send('Bele mehsul yoxdur')
            }
        })
    }
    else{
        console.log(err);
    }
})
app.listen(4000,()=>{
    console.log('B');
})
