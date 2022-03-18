import React, { useEffect, useState } from "react";
import { apiSearchMovie } from "../../api/apiSearchMovie";
import CardSearchFilm from "../CardSearchFilm/CardSearchFilm";
import { BoxCardSortear } from "../DrawContents/DrawContentsStyle";
import LoadingDrawMovie from "../LoadingDrawMovie/LoadingDrawMovie";
import { ContainerContests, TitleContents, BoxContents, ContainerFilms, InputSearchMovie } from './SearchMovieStyle'

const SearchMovieContents = () =>{
    const [ response, setResponse ] = useState([])
    const [getSearchMovie, setGetSearchMovie] = useState('');
    
    //  Volta a tela para o inicio sempre a rota for alterada;
    useEffect(()=>{
        window.scroll(0, 0)
    }, [])

    useEffect(()=>{
        document.querySelector('#film').addEventListener('keyup', (e)=>{
            setGetSearchMovie(e.target.value.trim())
            const value = e.target.value.trim()
            localStorage.setItem('search', JSON.stringify(value))
            if(value.length > 0){
                async function searchFilm(value){
                    await apiSearchMovie(value)
                        .get()
                        .then(res=>{
                            setResponse(res.data.results)
                            console.log(res.data.results)
                            
                        })
                        .catch(err =>{
                            console.log(err)
                        })
                }
                searchFilm(value)
            }})

            const getSearch = JSON.parse(localStorage.getItem('search'));
            if(getSearch !== "" && getSearch !== null){
                setGetSearchMovie(getSearch)
                document.querySelector('#film').value = getSearch
                async function searchFilm(value){
                    await apiSearchMovie(value)
                        .get()
                        .then(res=>{
                            setResponse(res.data.results)
                            console.log(res.data.results)
                            
                        })
                        .catch(err =>{
                            console.log(err)
                        })
                }
                searchFilm(getSearch)
            }
    }, [])
    return(
        <ContainerContests>
            <TitleContents data-title= 'title'>Procurar Filme</TitleContents>
            
            <BoxContents>
                    <InputSearchMovie type="text" id="film" autoComplete="off" spellCheck="false" placeholder="Digite o nome do filme"/>
                    <ContainerFilms>
                    {getSearchMovie === "" ? <BoxCardSortear><LoadingDrawMovie/></BoxCardSortear>: response.map(film =>{
                        return <CardSearchFilm 
                            key={film.id}
                            id={film.id}
                            title={film.title}
                            img={`https://image.tmdb.org/t/p/w500${film.poster_path !== null ? film.poster_path : film.backdrop_path}`}
                            synopsis={film.overview !== "" ? film.overview : "Não encontramos nenhuma sinopse para esse filme em nosso banco de dados."}
                            adult={film.adult}
                            idMovie={film.id}
                            videoFilm={film.video}
                        />
                    })}
                    </ContainerFilms>
            </BoxContents>
        </ContainerContests>
    )
}

export default SearchMovieContents;