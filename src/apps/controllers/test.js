const CategoryModel = require("../models/category");
const ProductModels = require("../models/products")
const test = async (req,res)=>{
    req.session.email="vietpro@gmail.com";
    res.send(req.session.email);
}
const test1 = (req,res)=> {
    if(req.session.email){
        res.send("session defined");
    } else{
        res.send("session not found");
    }

}

const test2 = (req,res)=>{
    req.session.destroy();
}

module.exports = {
    test,
    test1,
    test2,
}