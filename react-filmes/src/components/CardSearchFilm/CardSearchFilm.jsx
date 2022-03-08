import React, { useEffect, useState } from "react";
import { CardSearch, TitleCard, PosterCard, SynopsisCard, BoxPoster, AdultBox, RecommendationAdult } from "./CardSearchFilmStyle";

function CardSearchFilm({title, img, synopsis, adult}){
    const [ image, setImage] = useState('')
    const [ id, setId] = useState(0)

    useEffect(()=>{
        async function viewImage(){
            if(img !== 'https://image.tmdb.org/t/p/originalnull'){
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
            <CardSearch>
                <AdultBox data-num={id}>
                    <RecommendationAdult>+18</RecommendationAdult>
                </AdultBox>
                <BoxPoster>
                    <PosterCard src={image} alt="" />
                </BoxPoster>
                <TitleCard>{title}</TitleCard>
                <SynopsisCard>{synopsis}</SynopsisCard>
            </CardSearch>

    )   
}

export default CardSearchFilm;