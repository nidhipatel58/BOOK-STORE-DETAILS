const { createtoken } = require("../middleware/auth");
let { userService } = require("../service");
const sendEmail = require("../service/email.service");

let register = async (req, res) => {
  try {
    console.log(req.body);
    let body = req.body;

    let user = await userService.register(body)

    console.log(user, "res");

    //Email service:-

    // if (user) {
    //   let result = await sendEmail(
    //     user.email,
    //     "Test mail send",
    //     `welcome ${user.email}`
    //   );
    //   console.log(result);
    // }

    // console.log(user, "progress");

    res.status(201).json({
      message: "user register successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};


let getUser = async (req, res) => {

  try {

    console.log(req.body);
    let getuser = await userService.getUser();

    res.status(200).json({
      message: "get all user success",
      getuser,
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
};


let deleteUser = async (req, res) => {
  try {
    console.log(req.params);

    let { id } = req.params;

    let user = await userService.deleteUser(id);

    console.log(user);

    res.status(200).json({
      message: "user deleted success",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
};

let updateUser = async (req, res) => {

  try {

    let body = res.body;
    let { id } = req.params;

    let update = await userService.updateUser(id, body);

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

let login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await userService.findUser(email);
    console.log(user, "result");

    if (!user) {
      throw new Error("user not found!");
    }
    if (user.password != password) {
      throw new Error("password invalid");
    }

    let token = createtoken({ user })
    console.log(token);

    res.cookie("token", token);

    res.status(200).json({
      message: "login successfully",
    }); 

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

let getProfile = (req, res) => {
  let user = req.user;
  res.status(200).json({
    message: "profile get success!",
    user,
  })
}

module.exports = { register, getUser, deleteUser, updateUser, login, getProfile}