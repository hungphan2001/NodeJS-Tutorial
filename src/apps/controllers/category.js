  //Router Category

const category =(req,res)=>{
    res.render('admin/categories/category');
}

const create =(req,res)=>{
    res.render('admin/categories/add_category');
}

const edit =(req,res)=>{
    res.render ('admin/categories/edit_category');
}

const del = (req,res)=>{
    res.render ('admin/categories/delete_category');
}


module.exports= {
    category,
    create,
    edit,
    del,
}