var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

//链接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/vueSystem');

mongoose.connection.on('connected',function(){
  console.log("MongoDB connection Success!")
});

mongoose.connection.on('error',function(){
  console.log("MongoDB connection Fail!")
});

mongoose.connection.on('disconnected',function(){
  console.log("MongoDB connection Disconnected!")
});

router.get("/",function(req,res,next){
  //res.send("hello goodsList init.")
  Goods.find({},function(err,doc){
    if(err){
      res.json({
        status:'1',
        msg:err.message
      });
    }else{
      res.json({
        status:'0',
        msg:'',
        result:{
          count:doc.length,
          list:doc
        }
      })
    }
  })
});

module.exports = router
