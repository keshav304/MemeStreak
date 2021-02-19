import axios from 'axios';

const url = 'https://memestreak.herokuapp.com/memes';

export const fetchMemes = () => axios.get(url);

export const createMeme = (newMeme) => axios.post(url, newMeme);

export const deleteMeme = (id) => axios.delete(`${url}/${id}`);

export const likeMeme = (id) => axios.patch(`${url}/${id}/likeMeme`);

export const dislikeMeme = (id) => axios.patch(`${url}/${id}/dislikeMeme`);