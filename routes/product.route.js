let express=require("express");
let route=express.Router();
let {productController}=require("../controller");
let {productValidation}=require("../validations");
let validate=require("../middleware/validate");




route.post("/addproduct",validate(productValidation.product),productController.addproduct);
route.get("/getproduct",productController.getproduct);
route.delete("/delete/:id",productController.deleteproduct);
route.put("/update/:id",validate(productValidation.product),productController.updateproduct);

 
module.exports=route;