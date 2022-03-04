import React from "react";
import { ContainerContests } from "../MainContents/MainContestsStyle";
import { ContainerDraw, TitleContents } from './DrawContentsStyle'

const DrawContents = () =>{
    return(
        <ContainerContests>
            <ContainerDraw>
                <TitleContents>Raffle Movie</TitleContents>
            </ContainerDraw>
        </ContainerContests>
    )
}

export default DrawContents;