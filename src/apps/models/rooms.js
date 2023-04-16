const mongoose = require('../../common/database')();
const roomsSchema = new mongoose.Schema({
    name:{
        type:null,
        default:null,
    },
    type:{
        type:String,
        default:private,
    },
    users:{
        type:mongoose.Types.Array,
        default:null,
    },
    _v:{
        type:Number,
        default:null,
    }
},{
    timestamps:true,
});
const RoomsModels = mongoose.model('Rooms',roomsSchema,'rooms');
module.exports= RoomsModels;