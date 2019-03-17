var http=require('http');
var express = require('express');
var app=express();
app.get('/',(req,res) => {
  res.send('This is my express route');
}).listen(3000,'127.0.0.1');
console.log('listen to port number 3000!!!');
