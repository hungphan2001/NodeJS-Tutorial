const UsersModels = require("../models/users");

const getLogin =(req,res)=>{
    res.render('admin/login',{data:{}});
}

const postLogin = async(req,res)=>{

    const {email,password} =req.body;
    const user = await UsersModels.findOne(req.body);
    //console.log(user);
    let error = null;
    if(email==""||password==""){
        error='Email or password not empty';
    }else if(email==user.email && password==user.password){
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