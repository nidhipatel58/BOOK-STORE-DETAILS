let { orderSchema } = require("../model");

let register = (body) => {
    return orderSchema.create(body)
}

let getorder=()=>{
    return orderSchema.find().populate("productName").populate("userName")
}

let deleteorder=(id)=>{
    return orderSchema.findByIdAndDelete(id)
};

let updateorder=(id,body)=>{
  return orderSchema.findByIdAndUpdate(id,body)
};




module.exports = { register,getorder,deleteorder,updateorder }
