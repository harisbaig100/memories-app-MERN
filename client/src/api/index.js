import axios from "axios";

const url = 'http://localhost:8080/posts';

export const fetchPosts = () => axios.get(url);
export const createPosts = (post) => axios.post(url, post);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);