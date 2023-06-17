const ProductModel = require("../models/products");
const CategoryModel = require("../models/category");
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
    const products = await ProductModel.find({cat_id: id});
    const category = await CategoryModel.findById(id);
    const title = category.title;
    const total = products.length;
    res.render("site/category", {products, title, total});
}

const product = (req, res)=>{
    res.render("site/product");
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
    search,
    cart,
    success,
}
