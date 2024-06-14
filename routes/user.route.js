let express=require("express");
let route=express.Router();
let {userController}=require("../controller");
let validate=require("../middleware/validate")
let {userValidation}=require("../validations");
const { isLogin } = require("../middleware/auth");

    
route.post("/registeruser",validate(userValidation.user),userController.register);
route.get("/getuser/:id",isLogin,userController.getUser);
route.delete("/delete/:id",userController.deleteUser);
route.put("/update/:id",validate(userValidation.user),userController.updateUser);



//login
route.post("/login",validate(userValidation.user),userController.login);
route.get("/profile",isLogin,userController.getProfile)

module.exports=route;