import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com';

const API_KEY = 'mbV2Rsnk7O3xQ9uzrglpvnBa75htuy-hgfrX5kD9JIs';

const per_page = 12;

export const getImages = async (query, page) => {
    const response = await axios.get(`/search/photos?query=${query}&client_id=${API_KEY}&page=${page}&per_page=${per_page}`);
    return response.data;
};