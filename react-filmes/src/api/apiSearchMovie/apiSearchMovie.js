import axios from "axios";

export const apiSearchMovie = (film) => axios.create({
    baseURL: `https://api.themoviedb.org/3/search/movie?query=${film}&api_key=72b828205fe20d575b9bdfb06aea07e4&language=pt-BR`
})