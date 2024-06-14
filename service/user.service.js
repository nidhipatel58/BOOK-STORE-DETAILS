let { userSchema } = require("../model");


let register = (body) => {
  console.log(body, "added");

  return userSchema.create(body);
};

let getUser = () => {
  return userSchema.find();
};

let findUser = (email) => {
  return userSchema.findOne({ email });
};

let deleteUser = (id) => {
  return userSchema.findByIdAndDelete(id);
}

let updateUser = (id, body) => {
  return userSchema.findByIdAndUpdate(id, body)
}


module.exports = { register, getUser, deleteUser, updateUser, findUser }