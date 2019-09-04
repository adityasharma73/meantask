var express = require('express');
var router = express.Router();
var multer  = require('multer');
var path  = require('path');
var fs  = require('fs');
var db=require('../model/database')
/* GET home page. */
router.get("/add",function(req,res){
	res.render('add')
})
router.get("/showitem",function(req,res){
	db.showData(function (data) {
		console.log(data)	
	res.render('showitem',{user:data})	
	});
})
router.get("/delete/:id",function(req,res){
	var title=req.params.id;	
	db.deleteData({title:title});
	console.log("Params : "+title)	
	res.redirect('/showitem')
})

var userdata=[];
router.post("/add",function(req,res){
	var data=req.body;
	db.SaveData(data);
	res.send("Data Save")

})
router.post("/update",function(req,res){
	var data=req.body;
	db.updateData(data);
	res.redirect("/showitem")
})
router.get('/update/:title',function(req,res){
	var title=req.params.title;
	db.getData({title:title},function (result) {
		res.render('edit',{data:result[0]})
	})	
})

module.exports = router;

