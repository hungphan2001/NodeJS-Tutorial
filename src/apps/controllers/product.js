const products =(req,res)=>{
    res.send('products');
}

const create =(req,res)=>{
    res.send('create');
}

const edit =(req,res)=>{
    res.send ('edit');
}

const del = (req,res)=>{
    res.send ('delete');
}


module.exports= {
    products,
    create,
    edit,
    del,
}