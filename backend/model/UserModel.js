const { model }=require("mongoose");
const { UserSchema }=require("../schema/UserSchema");
const UserModel=model("user",UserSchema);
module.exports={ UserModel };