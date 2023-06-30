const slug = require("slug");
const paginate = require('../../common/paginate');
const CategoryModel = require("../models/category");

 //Router Category

 const category = async(req,res)=>{
    
    //Page
    const limit =10;
    const page = parseInt(req.query.page) ||1;
    const skip = page * limit -limit;
    const categories = await CategoryModel.find().skip(skip).sort({ _id: -1 }).limit(limit);

    //Total page
    const totalRow = await CategoryModel.find().countDocuments();
    const totalPage =Math.ceil(totalRow/limit);
    res.render('admin/categories/category',{
        categories,
        page,
        totalPage,
        pages:paginate(page,totalPage),
        data:{}
    });
}

const create =async (req,res)=>{
    res.render('admin/categories/add_category',{data:{}});
}

const postCategory = async (req,res)=>{
    const {title,description}=req.body;
    let error =null;

    if(title==""){
        error="Danh mục k dc bỏ trông";
    } else {
        const categories  = await CategoryModel.find({title});
        if(categories.length==0){
            const category = {
                title,
                description,
                slug:slug(title)
            };
            new CategoryModel(category).save();
            res.redirect("/admin/category");
        } else{
            error="Danh mục đã tồn tại";
        }
    }

    res.render('admin/categories/add_category',{data:{error}});
}

const update =async(req,res)=>{
    const {id}=req.params;
    const {body}=req;
    const category ={
        title: body.title,
        slug: slug(body.title),
    }
    await CategoryModel.updateOne({_id:id},{$set:category});
    res.redirect('/admin/category');
}

const edit =async(req,res)=>{
    const {id}=req.params;
    const category = await CategoryModel.findById(id);
    res.render ('admin/categories/edit_category',{category});
}

const del =async (req,res)=>{
    const {id}=req.params;
    await CategoryModel.deleteOne({_id:id});
    //req.session.success = 'Deleted Successfully';
    //res.render("admin/categories/category",{data:{message:"success"}});
    res.redirect ('/admin/category');
}


module.exports= {
    category,
    create,
    postCategory,
    edit,
    update,
    del,
}