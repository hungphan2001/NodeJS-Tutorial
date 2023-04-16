const mongoose = require('../../common/database')();
const productsSchema = new mongoose.Schema({
    thumbnail:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        default:null,
    },
    price:{
        type:Number,
        required:true,
    },
    cat_id:{
        type: mongoose.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    status:{
        type:String,
        default:null,
    },
    featured:{
        type:Boolean,
        default:false,
    },
    warrantly:{
        type:String,
        default:null,
    },
    accessories:{
        type:String,
        default:null,
    },
    is_stock:{
        type:String,
        default:true,
    },
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
    }
        
},{
    timestamps:true,
});

const ProductModels = mongoose.model('Product',productsSchema,"products");
module.exports= ProductModels;