import React from "react";
import { ContainerLoading, ImageLoading } from "./LoadingStyle";


const Loading = () =>{
    return(
        <ContainerLoading>
            <ImageLoading src={"https://acegif.com/wp-content/uploads/loading-89.gif"} alt="Carregando..."/>
        </ContainerLoading>
    )
}

export default Loading;