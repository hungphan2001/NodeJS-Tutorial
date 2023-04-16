const UsersModels = require("../models/users");

const getLogin =(req,res)=>{
    res.render('admin/login',{data:{}});
}

const postLogin = async(req,res)=>{

    const {email,password} =req.body;
    let error = null;

    //find all
    //const user = await UsersModels.findOne(req.body);

    const user = await UsersModels.find({email,password});
    //console.log(user);
    if(email==""||password==""){
        error='Email or password not empty';
    }else if(user.length>0){
        res.redirect('/admin/dashboard')
    }else{
        error = 'Tài khoản k hơp lệ';
    }
    res.render('admin/login',{data:{error}});

}

module.exports= {
    getLogin,
    postLogin,
}