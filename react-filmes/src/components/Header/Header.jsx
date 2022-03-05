import React, { useEffect } from "react";
import { ContainerHeader, BoxLogo, Logo } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import searchmovie from '../../images/searchmovie.png'

const Header = ({acao}) =>{
    const navigate = useNavigate()

    useEffect(()=>{
        document.querySelector('#home').addEventListener('click', ()=>{
            const itens = document.querySelectorAll('[data-id]')
            itens.forEach(item =>{
                item.classList.remove('item-clicked', 'icon-clicked')
            })
        })
    }, [])

    return(
        <ContainerHeader id="nav-horizontal" className={ acao ? 'scroll-on' : 'scroll-off'}>
            <BoxLogo id="home" >
                <Logo src={searchmovie} alt='logo' onClick={()=> navigate('/')}/>
            </BoxLogo>
        </ContainerHeader>
    )
}

export default Header;