const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'aditya';
var ObjectId = require('mongodb').ObjectID;
var db=new function () {
	this.SaveData=function (data) {
		MongoClient.connect(url,{useNewUrlParser:true}, function(err, client) {    
		  const db = client.db(dbName);

		 db.collection("assignment").insertOne(data,function (err,result) {
		 	if(err)
		 		console.log("Data Not Save : "+err)
		 	else
		 		console.log("Data Save")
		 });
		  client.close();
		});		
	}
	this.updateData=function (data) {
		MongoClient.connect(url,{useNewUrlParser:true}, function(err, client) {    
		  const db = client.db(dbName);

		 db.collection("assignment").updateOne({'_id':ObjectId(data.id)},{ $set:data},function (err,result) {
		 	if(err)
		 		console.log("Data Not Save : "+err)
		 	else
		 		console.log("Data Save")
		 });
		  client.close();
		});		
	}
	this.showData=function (cb) {		
		var mydata;
		MongoClient.connect(url,{useNewUrlParser:true}, function(err, client) {    
		const db = client.db(dbName);		  
		 db.collection("assignment").find({}).toArray(function(err,result) {
		 	if(err)
		 		cb("Data not Found")
		 	else{		 		
		 			cb(result)
		 		}
		 });
		  client.close();
		  
		});					
	}
	this.getData=function (data,cb) {		
		var mydata;
		MongoClient.connect(url,{useNewUrlParser:true}, function(err, client) {    
		const db = client.db(dbName);		  
		 db.collection("assignment").find({'_id':ObjectId(data.id)}).toArray(function(err,result) {
		 	if(err)
		 		cb("Data not Found")
		 	else{		 		
		 			cb(result)
		 		}
		 });
		  client.close();
		  
		});					
	}
	this.userLogin=function (data,cb) {		
		var mydata;
		MongoClient.connect(url,{useNewUrlParser:true}, function(err, client) {    
		const db = client.db(dbName);		  
		 db.collection("assignment").find({'email':data.useremail,'contact':data.password}).toArray(function(err,result) {
		 	if(err)
		 		cb(result,err)
		 	else{		 		
		 			cb(result,err)
		 		}
		 });
		  client.close();
		  
		});					
	}
	this.deleteData=function (data,cb) {		
		MongoClient.connect(url,{useNewUrlParser:true}, function(err, client) {    
		const db = client.db(dbName);		  

		db.collection("assignment").deleteOne({'_id':ObjectId(data)},function(err,result) {
		 	if(err)
		 		cb(false)
		 	else{		 		
		 			cb(true)
		 		}
		 });
		  client.close();		  
		});					
	}
}
module.exports=db;
