const CommentsModels = require("../models/comments");

const index = async (req,res)=>{
    const comments = await CommentsModels.find().sort({ _id: -1 });
    res.render('admin/comments/comment',{comments});
}

const del = async (req,res)=>{
    const {id}=req.params;
    await CommentsModels.deleteOne({_id:id});
    res.redirect('/admin/comments');
}


module.exports={
    index,
    del,
}