var express = require("express");
var app =express();

app.get('/', async (req,res)=>{
	res.send("Hello World!!")
})

var server = app.listen(3000, ()=>{
	var host = server.address().address;
	var port = server.address().port;
	console.log("Application run on host and post:",host,port)
})