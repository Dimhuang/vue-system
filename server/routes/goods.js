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
  let page = parseInt(req.param("page"));
  let pageSize = parseInt(req.param("pageSize"));
  let sort = req.param("sort");
  let skip = (page-1)*pageSize;
  let params = {};
  let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
  let goodsTotal = 0;
  Goods.find({},function(err,doc){
    goodsTotal = doc.length
  })
  goodsModel.sort({'salePrice':sort});
  goodsModel.exec(function(err,doc){
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
          list:doc,
          total:goodsTotal
        }
      })
    }
  })
});

module.exports = router
