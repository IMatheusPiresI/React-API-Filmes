import React, { useEffect } from "react";
import { BoxImageDraw, ImageDraw } from './LoadingDrawMovieStyle'

const LoadingDrawMovie = () =>{

    useEffect( () =>{
        document.querySelector('#img').style.animation = 'image 5s linear infinite';
    })
    return(
        <BoxImageDraw>
            <ImageDraw id='img'src={`https://lp.toquefeminino.com.br/wp-content/themes/pp-sales-new/images/interrogacao_rosa.png`}/>
        </BoxImageDraw>
    )
}

export default LoadingDrawMovie;