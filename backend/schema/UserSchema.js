const { Schema }=require("mongoose");
const UserSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:[true,"Your email is required"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Your password is required"],
    },
});
module.exports={ UserSchema };