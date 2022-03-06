import axios from 'axios'

export const apiFilmFeatured = () => axios.create({
    baseURL: `https://api.themoviedb.org/3/discover/movie?sort_by=popularrity.desc&api_key=72b828205fe20d575b9bdfb06aea07e4&language=pt-BR&page=01`,
})