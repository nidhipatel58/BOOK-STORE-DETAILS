let jwt = require("jsonwebtoken");


let createtoken = (data) => {
    console.log(data, "checking jwt");

    let token = jwt.sign(data, process.env.SECRET)
    return token;
}


let isLogin = (req, res, next) => {

    try {
        let token = req.cookies["token"];
        if (!token) {
            throw new Error("You are not logged in")
        }
        let user = jwt.verify(token, process.env.SECRET)
        console.log(user);
        req.user = user;
        next();

    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}


module.exports = { createtoken,isLogin}