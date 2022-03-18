import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DetailsContext } from "../../contexts/DetailsContext";
import { BoxCardSortear } from "../DrawContents/DrawContentsStyle";
import LoadingDrawMovie from "../LoadingDrawMovie/LoadingDrawMovie";
import { CardSearch, TitleCard, PosterCard, SynopsisCard, BoxPoster, AdultBox, RecommendationAdult } from "./CardSearchFilmStyle";

function CardSearchFilm({title, img, synopsis, adult, className, idMovie, videoFilm}){
    const [ image, setImage] = useState('')
    const [ id, setId] = useState(0)
    const navigate = useNavigate()
    const {setIdFilm, setVideo} = useContext(DetailsContext);

    const watchDetails = () =>{
        navigate(`/movie/${idMovie}`)
        setIdFilm(idMovie)
        setVideo(videoFilm)
        console.log(idMovie)
    }

    useEffect(()=>{
        async function viewImage(){
            if(img !== 'https://image.tmdb.org/t/p/w500null'){
                setImage(img)
            }else{
                setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/1479px-Noimage.svg.png')
            }
        }
        viewImage()
        if(adult === true){
            const num = Math.floor(Math.random() * 1000)
            setId(num)
        }
        
    }, [img, adult])

    useEffect(()=>{
        const itens = document.querySelectorAll('[data-num]')
        itens.forEach(item =>{
           if(item.dataset.num !== '0'){
               item.style.display = 'flex'
           }
        })
    })

    return(
            <>
            {image !== '' ? 
            <BoxCardSortear className="animate-card">
                <CardSearch className={className} onClick={watchDetails}>
                    <AdultBox data-num={id}>
                        <RecommendationAdult>+18</RecommendationAdult>
                    </AdultBox>
                    <BoxPoster>
                        <PosterCard src={image} alt="" />
                    </BoxPoster>
                    <TitleCard>{title}</TitleCard>
                    <SynopsisCard>{synopsis}</SynopsisCard>
                </CardSearch>
            </BoxCardSortear>
            : <LoadingDrawMovie/>}
            </>

    )   
}

export default CardSearchFilm;