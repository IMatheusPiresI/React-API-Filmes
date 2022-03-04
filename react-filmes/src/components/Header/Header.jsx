import React, { useEffect } from "react";
import { ContainerHeader, TitleHeader, Logo } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import searchmovie from '../../images/searchmovie.png'

const Header = ({acao}) =>{
    const home = useNavigate()

    useEffect(()=>{
        document.querySelector('#home').addEventListener('click', ()=>{
            const itens = document.querySelectorAll('[data-id]')
            itens.forEach(item =>{
                item.classList.remove('item-clicked', 'icon-clicked')
            })
        })
    })

    return(
        <ContainerHeader id="nav-horizontal" className={ acao ? 'scroll-on' : 'scroll-off'}>
            <Logo src={searchmovie} alt='logo'/>
            <TitleHeader id="home" onClick={()=> home('/')}>Search The Movie</TitleHeader>
        </ContainerHeader>
    )
}

export default Header;