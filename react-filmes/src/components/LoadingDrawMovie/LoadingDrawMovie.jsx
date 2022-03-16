import React from "react";
import { BoxImageDraw, ImageDraw } from './LoadingDrawMovieStyle'

const LoadingDrawMovie = () =>{
    return(
        <BoxImageDraw>
            <ImageDraw src={`https://lp.toquefeminino.com.br/wp-content/themes/pp-sales-new/images/interrogacao_rosa.png`}/>
        </BoxImageDraw>
    )
}

export default LoadingDrawMovie;