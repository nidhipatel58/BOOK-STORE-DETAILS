let { orderService } = require("../service");

let register = async (req, res) => {
    try {
        let body = req.body;

        console.log(body);

        let order = await orderService.register(body);

        res.status(201).json({
            message: "register order success",
            order,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
};


let getorder = async (req, res) => {
    try {

        console.log(req.body);
        let order = orderService.getorder();

        res.status(200).json({
            message: "getorder success",
            order,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
};


let deleteorder = async (req, res) => {

    try {

        console.log(req.params);
        let { id } = req.params;

        let deleteit = await orderService.deleteorder(id);
        console.log(deleteit, "delete");

        res.status(500).json({
            message: "deleted order success",
            deleteit,
        })
    } catch (err) {
        res.status(200).json({
            message: err.message
        })
    }
};

let updateorder= async(req, res) => {
    try {

        let body=req.body;
        let {id}=req.params;

        let update=await orderService.updateorder(id,body);
        console.log(user);

        res.status(200).json({
            message:"update order success..",
            update,
        });
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}


module.exports = { register, getorder, deleteorder,updateorder}