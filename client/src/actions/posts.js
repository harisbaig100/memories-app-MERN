import * as api from '../api';

export const fetchPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH', payload: data});
    } catch (err) {
        console.log(err.message);
    }
}

export const createPosts = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPosts(post);
        dispatch({type: 'CREATE', payload: data});
    } catch (err) {
        console.log(err.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({ type: 'UPDATE', payload: data});
    } catch (err) {
        console.log(err.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);
        dispatch({ type: 'DELETE', payload: id});
    }catch(err){
        console.log(err.message);
    }
}