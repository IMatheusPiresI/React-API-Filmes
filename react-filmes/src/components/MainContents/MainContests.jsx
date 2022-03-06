import React, { useEffect } from "react";
import { apiSearchMovie } from "../../api/apiSearchMovie/apiSearchMovie";
import { ContainerContests, TitleContents, BoxContents } from './MainContestsStyle'

const MainContests = () =>{

    useEffect(()=>{
        window.scroll(0, 0)
    }, [])

    useEffect(()=>{
        document.querySelector('#film').addEventListener('keyup', (e)=>{
            async function searchFilm(){
                await apiSearchMovie(e.target.value)
                    .get()
                    .then(res=>{
                        console.log(res)
                    })
            }
            searchFilm()
        })
    })
    return(
        <ContainerContests>
            <TitleContents data-title= 'title'>Search The Movie</TitleContents>
            <BoxContents>
                    <input type="text" id="film" />
            </BoxContents>
        </ContainerContests>
    )
}

export default MainContests;