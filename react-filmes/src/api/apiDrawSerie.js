import axios from "axios";

export const apiDrawSerie = (id) => axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${id}?api_key=72b828205fe20d575b9bdfb06aea07e4&language=pt-BR&external_source=imdb_id&include_adult=true`
})