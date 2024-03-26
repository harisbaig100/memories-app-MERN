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
        const data = await api.createPosts(post);
        console.log(data);
        dispatch({type: 'CREATE', payload: data});
    } catch (err) {
        console.log(err.message);
    }
}