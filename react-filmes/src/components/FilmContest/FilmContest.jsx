import React, { useEffect, useState } from "react";
import { TitleContents, BoxContents, ContainerContests } from "../MainContents/MainContestsStyle";
import { SectionMovies } from "./FilmContestStyle";
import apiHomePage from "../../api/apiHomePage";
import MovieRow from "../MovieRow/MovieRow";
import Loading from "../Loading/Loading";


const FilmContest = () =>{
    const [movieList, setMovieList] = useState([])

    useEffect(()=>{
        window.scroll(0, 0)
    },[])

    useEffect(()=>{
        const loadAll = async() =>{
            // Pegando a lista Total
            let list = await apiHomePage.getHomeList()
            setMovieList(list)
            console.log(list)
        }

        loadAll();
    },[])

    return(
        <ContainerContests>
            <TitleContents data-title = 'title'>Films</TitleContents>
            <BoxContents>
                <SectionMovies>
                    {movieList.map((film, key) =>{
                        return(
                            <MovieRow
                                slug={film.slug}
                                items={film.items}
                                key={key}
                                title={film.title}
                                
                            />
                        )
                    })}
                </SectionMovies>
                {movieList <= 0 && <Loading/>}
            </BoxContents>
        </ContainerContests>
    )
}

export default FilmContest;