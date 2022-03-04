import React from "react";
import { ContainerBody } from "./HomeStyle";
import Header from "../../components/Header/Header";
import NavHorizontal from "../../components/NavVertical/NavVertical";
import ParticleBackground from "../../components/ParticleBackgorund/ParticleBackground";

const Home = () =>{
    return(
        <ContainerBody>
            <ParticleBackground/>
            <Header/>
            <NavHorizontal/>
        </ContainerBody>
    )
}
export default Home;