import React, { useState } from "react";
import { ContainerRow, TitleSession, MovieListArea, MovieRowList } from "./MovieRowStyle";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { MovieRowLeft, MovieRowRigth } from "./MovieRowStyle"

const MovieRow = ({title, items}) =>{
    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () =>{
        let x = scrollX + Math.round((window.innerWidth) / 2);
        if(x > 0){
            x = 0
        }
        console.log(scrollX)
        setScrollX(x)
    }

    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        const listW = items.results.length * 200;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 175;
        }
        console.log(scrollX)
        setScrollX(x)
    }
    return(
        <ContainerRow>
            <TitleSession>{title}</TitleSession>
           
            <MovieListArea className="hidden">
                <MovieRowLeft className="row-left" onClick={handleLeftArrow}>
                    <NavigateBeforeIcon className="icon"/> 
                </MovieRowLeft>
                <MovieRowRigth className="row-rigth" onClick={handleRightArrow}> 
                    <NavigateNextIcon className="icon"/> 
                </MovieRowRigth>
               <MovieRowList style={{
                   marginLeft: scrollX,
                   width: items.results.length * 200,
               }}>
               {items.results.length > 0 && items.results.map((item, key)=>{
                    return (
                        <div className="list-item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title}/> 
                        </div>
                    )
                })}
               </MovieRowList>
            </MovieListArea>
        </ContainerRow>
    )
}

export default MovieRow;