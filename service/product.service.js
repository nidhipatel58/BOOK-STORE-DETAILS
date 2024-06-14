let { productSchema } = require("../model");


let addproduct = (body) => {

    console.log(body, "added");

    return productSchema.create(body);

}

let getproduct = () => {
    return productSchema.find();
}

let deleteproduct = (id)=>{

    return productSchema.findByIdAndDelete(id)
}

let updateproduct=(id,body)=>{
   return productSchema.findByIdAndUpdate(id,body)
}



module.exports = { addproduct, getproduct,deleteproduct,updateproduct}

