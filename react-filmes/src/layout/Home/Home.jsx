import React, { useState, useEffect } from "react";
import { ContainerBody, ContainerHeader } from "./HomeStyle";
import Header from "../../components/Header/Header";
import NavVertical from "../../components/NavVertical/NavVertical";
import ParticleBackground from "../../components/ParticleBackgorund/ParticleBackground";
import { Outlet } from "react-router-dom";


const Home = () =>{
    const [ativacor, setAtivacor] = useState(false)

    useEffect(()=>{
        const activate = () =>{
            if(window.scrollY > 10){
                setAtivacor(true)
                document.querySelectorAll('[data-title]').forEach(title =>{
                    title.classList.add('scroll-on')
                })
            }else{
                setAtivacor(false)
                document.querySelectorAll('[data-title]').forEach(title =>{
                    title.classList.remove('scroll-on')
                })
            }
        }
        activate()
        window.addEventListener('scroll', activate)
    }, [ativacor])


    useEffect(()=>{
        const itens = document.querySelectorAll('[data-id')
        if(window.location.pathname === '/film'){
            itens[0].classList.add('item-clicked', 'icon-clicked')
        } else if(window.location.pathname === '/netflix'){
            itens[1].classList.add('item-clicked', 'icon-clicked')
        } else if(window.location.pathname === '/draw'){
            itens[2].classList.add('item-clicked', 'icon-clicked')
        } else if(window.location.pathname === '/developer'){
            itens[3].classList.add('item-clicked', 'icon-clicked')
        }
    }, [])
    
    return(
        <>
        <ContainerHeader>
            <ParticleBackground/>
        
            <Header
                acao={ativacor}
            />
            <NavVertical/>
        </ContainerHeader>
        <ContainerBody>
            <Outlet/>
        </ContainerBody>
        </>
        
    )
}
export default Home;