const moment = require('moment');
const ProductModel = require("../models/products");
const CategoryModel = require("../models/category");
const CommentsModels = require("../models/comments");
const home = async (req, res) => {
    const featuredProduct = await ProductModel
        .find({featured: true, is_stock: true})
        .sort({ _id: -1 })
        .limit(6);
    const latestProduct = await ProductModel
        .find({
            is_stock: true})
        .sort({ _id: -1 })
        .limit(6);
    res.render("site/index",{featuredProduct,latestProduct});
}


const category = async (req, res) => {
    const id = req.params.id;
    const products = await ProductModel
    .find({cat_id: id})
    .sort({_id:-1});
    const category = await CategoryModel.findById(id);
    const title = category.title;
    const total = products.length;
    res.render("site/category", {products, title, total});
}

const product =async (req, res)=>{
    const id = req.params.id;
    const products = await ProductModel.findById(id);
    const comments = await CommentsModels.find({prd_id:id}).sort({_id:-1});
    res.render("site/product",{products,comments,moment});
}

const comment = async (req,res)=>{
    const {id} = req.params;
    const {email,full_name,body} =req.body;
    const comment ={
        prd_id:id,
        full_name:full_name,
        email:email,
        body:body,
    }
    await new CommentsModels (comment).save();
    res.redirect(req.path);
}
const search = (req, res)=>{
    res.render("site/search");
}
const cart = (req, res)=>{
    res.render("site/cart");
}
const success = (req, res)=>{
    res.render("site/success");
}

module.exports = {
    home,
    category,
    product,
    comment,
    search,
    cart,
    success,
}
