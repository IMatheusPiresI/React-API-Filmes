import React, { useEffect, useState } from "react";
import { TitleContents, BoxContents, ContainerContests } from "../MainContents/MainContestsStyle";
import apiHomePage from "../../api/apiHomePage";
import MovieRow from "../MovieRow/MovieRow";


const FilmContest = () =>{
    const [movieList, setMovieList] = useState([])

    useEffect(()=>{
        window.scroll(0, 0)
    },[])

    useEffect(()=>{
        const loadAll = async() =>{
            // Pegando a lista Total
            let list = await apiHomePage.getHomeList()
            console.log(list)
            setMovieList(list)
        }

        loadAll();
    },[])
    return(
        <ContainerContests>
            <TitleContents data-title = 'title'>Films</TitleContents>
            <BoxContents>
                <section>
                    {movieList.map((film, key) =>{
                        return(
                            <MovieRow
                                key={key}
                                title={film.title}
                                items={film.items}
                            />
                        )
                    })}
                </section>
            </BoxContents>
        </ContainerContests>
    )
}

export default FilmContest;