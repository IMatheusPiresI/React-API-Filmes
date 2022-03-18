import React, { useEffect, useState } from "react";
import { ContainerContests, TitleContents, BoxContents } from "../SearchMovieContents/SearchMovieStyle";
import { ContainerDraw, BoxCardSortear, BoxDrawButton, DrawTitle, DrawButton, BoxCard } from "./DrawContentsStyle";
import { apiDrawSerie } from "../../api/apiDrawSerie";
import CardSearchFilm from '../CardSearchFilm/CardSearchFilm'
import LoadingDrawMovie from "../LoadingDrawMovie/LoadingDrawMovie";

const DrawContents = () =>{
    const [drawSerie, setDrawSerie] = useState()
    const [image, setImage] = useState('')

    //  Volta a tela para o inicio sempre a rota for alterada;
    useEffect(()=>{
        window.scroll(0, 0)
    }, [])
    
    useEffect(() =>{
        const InitDraw = async() =>{
            const getDraw = localStorage.getItem('draw');
            if(getDraw){
                if(getDraw !== null){
                    await apiDrawSerie(getDraw)
                    .get()
                    .then(res => {
                        setDrawSerie(res.data)
                        console.log(res.data)
                        if(res.data.poster_path !== null){
                            setImage(`https://image.tmdb.org/t/p/w500${res.data.poster_path}`)
                        }else{
                            setImage(`https://image.tmdb.org/t/p/w500${res.data.backdrop_path}`)
                        }
                    })
                    .catch(() =>{
                        const errorTratament = async() =>{
                            await apiDrawSerie(409)
                            .get()
                            .then(res => {
                                setDrawSerie(res.data)
                                console.log(res.data)
                                if(res.data.poster_path !== null){
                                    setImage(`https://image.tmdb.org/t/p/w500${res.data.poster_path}`)
                                }else{
                                    setImage(`https://image.tmdb.org/t/p/w500${res.data.backdrop_path}`)
                                }
                            })
                        }
                        errorTratament();
                    })
                }
            }
        }
        InitDraw();
    }, [])

    useEffect(()=>{
        document.querySelector('#draw').addEventListener('click', () =>{
            const draw = (Math.ceil(Math.random() * 1000));
            localStorage.setItem('draw', JSON.stringify(draw))
            const apiResults = async() =>{
                await apiDrawSerie(draw)
                .get()
                .then(res => {
                    setDrawSerie(res.data)
                    console.log(res.data)
                    if(res.data.poster_path !== null){
                        setImage(`https://image.tmdb.org/t/p/w500${res.data.poster_path}`)
                    }else{
                        setImage(`https://image.tmdb.org/t/p/w500${res.data.backdrop_path}`)
                    }
                })
                .catch(async (err) =>{
                    await apiDrawSerie(409)
                    .get()
                    .then(res => {
                        setDrawSerie(res.data)
                        console.log(res.data)
                        if(res.data.poster_path !== null){
                            setImage(`https://image.tmdb.org/t/p/w500${res.data.poster_path}`)
                        }else{
                            setImage(`https://image.tmdb.org/t/p/w500${res.data.backdrop_path}`)
                        }
                    })
                })   
            }
            apiResults();
        })
    }, [])

    return(
        <ContainerContests>
                <TitleContents data-title = 'title'>Sortear Filme</TitleContents>
               <BoxContents>
                    <ContainerDraw>
                            <BoxDrawButton>
                                <DrawTitle>Procurando um filme para assistir?</DrawTitle>
                                <DrawTitle>Deixe que nós escolhemos para você!</DrawTitle>
                                <DrawButton id='draw'>Sortear</DrawButton>
                            </BoxDrawButton>
                            <BoxCard id="cardDraw" className="animate-card">
                                {image !== '' ? 
                                    <CardSearchFilm
                                        key={drawSerie.id}
                                        img={image}
                                        title={drawSerie.title === undefined ? drawSerie.name : drawSerie.title}
                                        id={drawSerie.id}
                                        synopsis={drawSerie.overview !== "" ? drawSerie.overview : "Não encontramos nenhuma sinopse para esse filme em nosso banco de dados."}
                                        adult={drawSerie.adult}
                                        idMovie={drawSerie.id}
                                        videoFilm={drawSerie.video}
                                    />             
                                    :  <BoxCardSortear> <LoadingDrawMovie/> </BoxCardSortear>
                                    }
                            </BoxCard>
                    </ContainerDraw>
               </BoxContents>
        </ContainerContests>
    )
}

export default DrawContents;