import mongoose from "mongoose";

//create new mongoose post scehma
const Post = new mongoose.Schema({
    name: { type: String, required: true},
    prompt: { type: String, required: true},
    photo: { type: String, required: true},

})

//create model out of schema from above
const PostSchema = mongoose.model('Post', Post)

export default PostSchema;