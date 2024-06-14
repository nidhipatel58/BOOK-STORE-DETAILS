let mongoose=require("mongoose");

let orderSchema = new mongoose.Schema({
    productName: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "productSchema"
    },
    userName: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "userSchema"
    },
    date: {
       type: Date,
       default:Date.now,
    }
 });
 

let order=mongoose.model("order",orderSchema)
 module.exports=order;