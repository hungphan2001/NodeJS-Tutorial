  const UsersController = require("../models/users");
  const paginate = require("../../common/paginate");
  
  //Router users

  const users = async(req,res)=>{
    
    //Page
    const limit =10;
    const page = parseInt(req.query.page) ||1;
    const skip = page * limit -limit;
    const users = await  UsersController.find().skip(skip).limit(limit)
    res.render('admin/users/users');
}

const create =(req,res)=>{
    res.render('admin/users/add_users');
}

const edit =(req,res)=>{
    res.render ('admin/users/edit_users');
}

const del = (req,res)=>{
    res.render ('admin/users/delete_users');
}


module.exports= {
    users,
    create,
    edit,
    del,
}