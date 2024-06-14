let { productService } = require("../service");

let addproduct = async (req, res) => {
    try {
        console.log(req.body);
        let body = req.body;

        let user = await productService.findByName(body.name);
        console.log(user, "added product");

        if (user) {
          throw new Error("product already exist");
        }

        let result = await productService.addProduct(body);

        if (!result) {
          throw new Error("something went wrong");
        }
    

        res.status(200).json({
            message: "register product success",
            result,
        })
    } catch (err) {
        console.log(err, "err");
    }
};

let getproduct = async (req, res) => {

    try {

        console.log(req.body);
        let getuser = await productService.getproduct();

        res.status(200).json({
            message: "get all product success",
            getuser,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }

};


let deleteproduct = async (req, res) => {
    try {
      console.log(req.params);
  
      let { id } = req.params;
  
      let user = await productService.deleteproduct(id);
  
      console.log(user);
  
      res.status(200).json({
        message: "product deleted success",
        user,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message
      })
    }
  };

  let updateproduct=async(req,res)=>{
    try {

        let body = res.body;
        let { id } = req.params;
    
        let update = await productService.updateproduct(id, body);
        console.log(update,"updated");
    
        res.status(200).json({
          message: "updated success",
          update,
        });
    
      } catch (err) {
        res.status(500).json({
          message: err.message
        })
      }
  };




module.exports = { addproduct,getproduct,deleteproduct ,updateproduct}