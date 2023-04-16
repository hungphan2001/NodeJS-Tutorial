const mongoose = require('../../common/database')();
const usersSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    full_name:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
});
const UsersModels = mongoose.model('Users',usersSchema,'users');
module.exports= UsersModels;