const mongoose = require("../../common/database")();
const commentsSchema = new mongoose.Schema({
    email: {
        type: String,
        default: null,
    },
    prd_id: {
        type:mongoose.Types.ObjectId,
        ref:'',
        required:true,
    },
    body: {
        type: String,
        default: null,
    },
    full_name: {
        type: String,
        default: null,
    },
    __v: {
        type: Number,
        default: null,

    }
}, {
    timestamps: true,
});

const CommentsModels = mongoose.model('Comments',commentsSchema,'comments');
module.exports= CommentsModels;