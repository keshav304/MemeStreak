import { likeMeme } from "../api";

// reducers handling diffrent types of actions
export default (memes=[], action) => {
    switch (action.type) {
        case 'DELETE':
            return memes.filter((meme)=>meme.id !==action.payload)
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...memes, action.payload];
        case 'LIKE':
            return memes.map((meme) => (meme._id === action.payload._id ? action.payload : meme));
        case 'DISLIKE':
           
            return memes.map((meme) => (meme._id === action.payload._id ? action.payload : meme));
        default:
            return memes;
    }
}