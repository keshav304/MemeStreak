import * as api from '../api/index.js';

const FETCH = "FETCH_ALL";
const CREATE = "CREATE";
const LIKE= "LIKE";
const DISLIKE= "DISLIKE";
const DELETE = "DELETE";



// action creators

export const getMemes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMemes();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);
    }

}

export const createMeme = (meme) => async (dispatch) => {
    try {
        const { data } = await api.createMeme(meme);
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }

}

export const deleteMeme = (id) => async (dispatch) => {
    try {
        await api.deleteMeme(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error.message)
    }
};

export const likeMeme = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeMeme(id);

        dispatch({ type: 'LIKE', payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const dislikeMeme = (id) => async (dispatch) => {
    try {
        const { data } = await api.dislikeMeme(id);

        dispatch({ type: 'DISLIKE', payload: data });
    } catch (error) {
        console.log(error.message)
    }
};