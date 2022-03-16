import React, { useEffect, useState } from "react";
import { apiSearchMovie } from "../../api/apiSearchMovie";
import CardSearchFilm from "../CardSearchFilm/CardSearchFilm";
import { ContainerContests, TitleContents, BoxContents, ContainerFilms, InputSearchMovie } from './MainContestsStyle'

const MainContests = () =>{
    const [ response, setResponse ] = useState([])
    
    //  Volta a tela para o inicio sempre a rota for alterada;
    useEffect(()=>{
        window.scroll(0, 0)
    }, [])

    useEffect(()=>{
        document.querySelector('#film').addEventListener('keyup', (e)=>{
            const value = e.target.value.trim()
            if(value.length > 0){
                async function searchFilm(){
                    await apiSearchMovie(e.target.value)
                        .get()
                        .then(res=>{
                            setResponse(res.data.results)
                            console.log(res.data.results)
                            
                        })
                        .catch(err =>{
                            console.log(err)
                        })
                }
                searchFilm()
            }})
    }, [])
    return(
        <ContainerContests>
            <TitleContents data-title= 'title'>Search The Movie</TitleContents>
            
            <BoxContents>
                    <InputSearchMovie type="text" id="film" autoComplete="off"/>
                    <ContainerFilms>
                    {response.map(film =>{
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

export default MainContests;