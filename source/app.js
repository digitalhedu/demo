const express = require('express');
const {resolve} = require('path');
const server = express()
const port = process.env.PORT || 2020
const start = () => console.log("Sever Start")
server.listen(port,start())
let public = express.static(resolve(__dirname,'../public'))
server.use(public) // /images/cat-1.png

server.get('/',(req,res) => res.sendFile(resolve(__dirname,'views','index.html')))
server.get('/login',(req,res) => res.sendFile(resolve(__dirname,'views','login.html')))