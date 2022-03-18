import React from "react";
import { BoxImageDraw, ImageDraw } from './LoadingDrawMovieStyle'
import interrogacao from '../../images/interrogacao.png'

const LoadingDrawMovie = () =>{
    return(
        <BoxImageDraw>
            <ImageDraw src={interrogacao}/>
        </BoxImageDraw>
    )
}

export default LoadingDrawMovie;