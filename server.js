var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');

const api=require('./server/router/api')

var app=express()

app.use(express.static(path.join(__dirname+'/dist/Assignment')))

app.use('/api',api)

app.use('*',(req,res)=>{
	res.sendFile(path.join(__dirname+'/dist/Assignment/index.html'));
})

app.listen(3000,function () {
	console.log("Server Connected...")
})
