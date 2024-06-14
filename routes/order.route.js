let express=require("express");
let route=express.Router();
let {orderController}=require("../controller");
let {orderValidation}=require("../validations");
let validate=require("../middleware/validate")


route.post("/register",validate(orderValidation.order),orderController.register);
route.get("/getorder/:id",orderController.getorder);
route.delete("/delete/:id",orderController.deleteorder);
route.put("/update/:id",validate(orderValidation.order),orderController.updateorder);


module.exports=route;


