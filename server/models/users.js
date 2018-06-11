var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  "userId":String,
  "userName":String,
  "userPwd":String,
  "orderList":Array,
  "cartList":[{
      "productId":String,
      "productName":String,
      "salePrice":Number,
      "checked":String,
      "productNum":Number,
      "productImage":String
    }],
    "addressList":{
      "addressId":String,
        "userName":String,
        "streetName":String,
        "postCode":Number,
        "tel":String,
        "addressId":String,
    }
});

module.exports = mongoose.model('User',userSchema);
