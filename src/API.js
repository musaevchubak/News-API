import axios from 'axios';

export const axiosCardsGetter = axios.create({
  baseURL: 'https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=fca93c8b9a8548d598706ce278bedebe',
});
