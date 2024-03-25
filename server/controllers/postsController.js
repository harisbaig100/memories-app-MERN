import postModel from "../models/postModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
    
}

export const createPost = (req, res) => {
    const post = req.body;
    const newPost = new postModel(post);
    try {
        newPost.save();
        res.status(201).json(newPost)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}