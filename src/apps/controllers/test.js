const CategoryModel = require("../models/category");
const ProductModels = require("../models/products")
const test = async (req,res)=>{

    const category = await CategoryModel.find();
    const products = await ProductModels.find();
    console.log(category.length+products.length);
    //    const str = 'welcome ';

    //    const promise = new Promise((res,rej)=>{
    //       setTimeout(()=>{
    //         res(str + 'NodeJS');
    //       },2000)
    //    })
    //    promise.then((result)=>{
    //       console.log(result);
    //    })
        // const category ={
        //     description:'Bphone description',
        //     title:'Bphone tilte',
        //     slug:'bphone-slug',

        // }
    // new CategoryModel(category).save();

    // CategoryModel.deleteOne({},{title:"Bphone tilte"}).exec((err,docs)=>{
    //     console.log(err);
    //     console.log(docs);
    // })

    // ProductModels.find().populate({path:'cat_id'}).exec((err,docs)=>{
    //     console.log(docs);
    // });
    // res.send(`
    // <form method=post>
    //    <input type=text name=email />
    //    </br>
    //    <input type=text name=password />
    //    </br>
    //    <input type=submit name=submit value=Send />
    // </form>`);
    // const data2 = 'NodeJS';
    // res.render('admin/test',{data2});
    // res.redirect('/admin/dashboard');

    // const f = ({a})=>a;
    // const obj = {
    //     a: 'JavaScript',
    //     b: 'PHP',
    //     c: 'ReactJS',
    // }
    // console.log(f(obj));
}

const test2 = (req,res)=>{
    res.send(req.boby.email);
}

module.exports = {
    test,
    test2,
}