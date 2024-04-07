import  mongoose  from "mongoose";

const postSchema = new mongoose.Schema({
    title: {type :String, required: true, trim: true},
    body: {type :String, required: true, trim: true},
})

//Complie Schema
const Post = mongoose.models.Post || mongoose.model('Post',postSchema)

export default Post