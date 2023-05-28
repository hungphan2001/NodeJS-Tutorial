const UserModel = require('../models/users')
const ProductsModel = require('../models/products')

const index = async (req, res) => {
    if (!req.session.email || !req.session.password) {
        res.redirect('/admin/login');
    } 
    const users = (await UserModel.find()).length;
    const products = (await ProductsModel.find()).length;
    res.render('admin/dashboard', { users, products });
}
const products = (req, res) => {
    res.send('products');
}

const category = (req, res) => {
    res.render('admin/categories');
}


module.exports = {
    index,
    products,
    category,
}