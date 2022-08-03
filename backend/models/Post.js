import mongoose from "mongoose";

const PostSchema =  new mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        default: []
    },
    viewsCount: {
        type: Number,
        default: 0
    },
    likeCount: {
        type: Number,
        default: 0
    },
    repostCount: {
        type: Number,
        default: 0
    },


    postImgURL: String,
    },
);

export default mongoose.model('Post', PostSchema);
