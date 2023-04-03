const getLogin =(req,res)=>{
    res.render('admin/login',{data:{}});
}

const postLogin =(req,res)=>{

    const {email,password} =req.body;
    let error = null;
    if(email==""||password==""){
        error='Email or password not empty';
    }else if(email=='test@gmail.com' && password=='123456'){
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