import axios from "axios"

const API_KEY = '72b828205fe20d575b9bdfb06aea07e4'
const BASE_URL = 'https://api.themoviedb.org/3'

/*
-   originais da netflix
-   recomendados (trending)
-   em alta (top rated)
-   ação
-   comédia
-   terror
-   romance
-   documentários
*/
const apiAxios = (endpoint) => axios.create({
    baseURL: `${BASE_URL}${endpoint}`
})

const basicAxios = async(endpoint) =>{
    return apiAxios(endpoint).get().then(res=> res).then(res => res.data);
}

export default {
    getHomeList: async () =>{
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicAxios(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items:  await basicAxios(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items:  await basicAxios(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicAxios(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicAxios(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicAxios(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicAxios(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicAxios(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    }
}