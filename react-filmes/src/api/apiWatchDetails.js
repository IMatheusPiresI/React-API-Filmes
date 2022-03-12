import axios from "axios";

export const apiWatchDetailsSeries = (id) => axios.create({
    baseURL: `https://api.themoviedb.org/3/tv/${id}?&include_adult=true&api_key=72b828205fe20d575b9bdfb06aea07e4&language=pt-BR`
})

export const apiWatchDetailsMovies = (id) => axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${id}?&include_adult=true&api_key=72b828205fe20d575b9bdfb06aea07e4&language=pt-BR`
})
 


