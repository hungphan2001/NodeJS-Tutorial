
const index =(req,res)=>{
    res.send('dashboard');
}
const products =(req,res)=>{
    res.send('products');
}



module.exports= {
    index,
    products,
}