import React, { useEffect } from "react";
import { ContainerContests } from "../MainContents/MainContestsStyle";
import { TitleContents } from "../MainContents/MainContestsStyle";
import { BoxContents } from "../MainContents/MainContestsStyle";

const DrawContents = () =>{

    useEffect(()=>{
        window.scroll(0, 0)
    }, [])

    return(
        <ContainerContests>
                <TitleContents data-title = 'title'>Sortear Filme</TitleContents>
               <BoxContents>
                    
               </BoxContents>
        </ContainerContests>
    )
}

export default DrawContents;