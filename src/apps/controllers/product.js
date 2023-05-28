const ProductModels = require('../models/products');
const CategoryModel = require("../models/category");
const paginate = require('../../common/paginate');
const slug = require("slug");
const fs = require("fs");
const path = require("path");
const index = async (req, res) => {

    //Paginate 
    const limit = 10;
    const page = parseInt(req.query.page) || 1;
    const skip = page * limit - limit;
    const products = await ProductModels.find().skip(skip).sort({ _id: -1 }).limit(limit).populate({ path: 'cat_id' });

    //Total Page
    const totalRow = await ProductModels.find().countDocuments();
    const totalPage = Math.ceil(totalRow / limit);

    res.render('admin/products/product', {
        products,
        page,
        totalPage,
        pages: paginate(page, totalPage),
    });
}

const create = async (req, res) => {
    const categories = await CategoryModel.find();
    res.render('admin/products/add_product', { categories });
}

const store = (req, res) => {
    const { file, body } = req;
    const product = {
        //thumbnail:,
        description: body.description,
        price: body.price,
        cat_id: body.cat_id,
        featured: body.featured == "on",
        promotion: body.promotion,
        warranty: body.warranty,
        accessories: body.accessories,
        is_stock: body.is_stock,
        name: body.name,
        slug: slug(body.name),
    }
    if (file) {
        const thumbnail = "products/" + file.originalname;
        fs.renameSync(file.path, path.resolve("src/public/images", thumbnail));
        product["thumbnail"] = thumbnail;
        new ProductModels(product).save();
        res.redirect("/admin/products");
    }

    // console.log(file.fieldname);
    // console.log(file.originalname);
    // console.log(file.encoding);
    // console.log(file.mimetype);
    // console.log(file.size);
    // console.log(file.destination);
    // console.log(file.filename);
    // console.log(file.path);
    // console.log(file.buffer);

}
const update = async(req, res) => {
    const id =req.params.id;
    const {file,body}=req;
    const product = {
        description: body.description,
        price: body.price,
        cat_id: body.cat_id,
        featured: body.featured == "on",
        promotion: body.promotion,
        warranty: body.warranty,
        accessories: body.accessories,
        is_stock: body.is_stock,
        name: body.name,
        slug: slug(body.name),
    }
    if(file){
        const thumbnail = "products"/+originalname;
        fs.renameSync(file.path,path.resolve("src/public/images",thumbnail));
        product['thumbnail']= thumbnail;
    }
    await ProductModels.updateOne({_id:id},{$set:product});
    res.redirect('/admin/products');
}

const edit = async(req, res) => {
    const id =req.params.id;
    const product = await ProductModels.findById(id);
    const categories = await CategoryModel.find({});
    res.render('admin/products/edit_product',{product,categories});
}

const del = async (req, res) => {
    const id = req.params.id;
    await ProductModels.deleteOne({ _id: id });
    res.redirect('/admin/products');
}


module.exports = {
    index,
    create,
    edit,
    del,
    store,
    update,
}