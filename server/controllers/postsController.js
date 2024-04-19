import mongoose from "mongoose";
import postModel from "../models/postModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
    
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new postModel(post);
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const {title, message, creator, selectedFile, tags} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `No post with that id ${id}` });
    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
    await postModel.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `No post with that id ${id}` });
    await postModel.findByIdAndDelete(id);
    res.json({ message: 'post deleted successfully'});
}