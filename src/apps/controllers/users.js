const paginate = require("../../common/paginate");
const UsersModels = require("../models/users");
  
  //Router users

  const users = async(req,res)=>{
    
    //Page
    const limit =5;
    const page = parseInt(req.query.page) ||1;
    const skip = page * limit -limit;
    const users = await UsersModels.find().skip(skip).sort({ _id: -1 }).limit(limit);

    //Total page
    const totalRow = await UsersModels.find().countDocuments();
    const totalPage =Math.ceil(totalRow/limit);
    res.render('admin/users/users',{
        users,
        page,
        totalPage,
        pages:paginate(page,totalPage),
    });
}

const create =(req,res)=>{
    res.render('admin/users/add_users',{data:{}});
}

const postUser =async(req,res)=>{
    const {email,full_name,password,role}=req.body;
    let error = null;
    const users = await UsersModels.find({email});
    if(users.length==0){
        const user ={
            email,
            password,
            role,
            full_name
        };
    new UsersModels(user).save();
    res.redirect("/admin/users");
    } else {
        error = "Email đã tồn tại";
    }

    res.render('admin/users/add_users',{data:{error}});
}

const update = async (req,res)=>{
    const id =req.params.id;
    const {email,full_name,password,role}=req.body;
    let error =null;
    const user1 =await UsersModels.find({email,password});
    if(user1.length==0){
        const user ={
            email,
            password,
            role,
            full_name
        };
    await UsersModels.updateOne({_id:id},{$set:user});
    res.redirect("/admin/users");
    } else {
        error = "Email đã tồn tại hoặc Mật khẩu không khớp !";
    }
    res.render("admin/users/edit_users",{data:{error}});
}

const edit =async(req,res)=>{
    const {id}=req.params;
    const users = await UsersModels.findById(id);
    res.render ('admin/users/edit_users',{users,data:{}});
}

const del = async(req,res)=>{
    const {id}=req.params;
    await UsersModels.deleteOne({_id:id});
    res.redirect ('/admin/users');
}


module.exports= {
    users,
    create,
    postUser,
    edit,
    update,
    del,
}