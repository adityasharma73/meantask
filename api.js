var express =require('express');
var users = require('../model/database');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/', function( req, res , next) {
res.send('Root Call')
});

router.get('/getList' ,function(req ,res , next)
{
assignment.userList(function (error,result)
{
res.json(result);
});
});
router.get('/update/:id' ,function(req , res , next)
{
    var id = req.param('id');
    console.log(id);
    assignment.updateUser(id , function(error ,data)
    {
        return res.json(data);
    })
})
router.post('/update/:id' ,function(req,res , next){
var user = (req.body);
    var id =req.param('id');
    console.log("Data Call " +user);
    assignment.userUpdate(user  , function(error ,data)
    {
        if(error)
        {
            return {msg:'Data Not Update' , status:false};
        }
        else
        {
            return {msg:'Data  Update' , status:true};
        }
    })
})
router.get("/deleteUser/:id", function(req , res )
{
    var id = req.param('id');
    //console.log("Id Call" +id);
    assignment.deleteUser(id ,function(error,result)
    {
        
return res.json(result);
    });
});

router.post('/add' ,function(req,res){
    var user= req.body;

    console.log("Data Call " + user[0]);
    assignment.userEntry(user , function(error ,data)
    {
        if(error)
        {
            return {msg:'Data Not Save' , status:false};
        }
        else
        {
            return res.json({msg:'Data  Save' , status:true});
        }
    })
})
module.exports= router;