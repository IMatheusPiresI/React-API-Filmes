import React, { useEffect } from "react";
import Navitem from "../NavItem/Navitem";
import { ContainerNav } from "./NavVerticalStyle";
import { ImFilm } from 'react-icons/im'
import { RiNetflixFill } from 'react-icons/ri'
import { MdOutlineDeviceUnknown } from 'react-icons/md'

const NavHorizontal = () =>{
    //  Adiciona uma sombra destacada ao ícone selecionado para exibição;
    useEffect(()=>{
            const itens = document.querySelectorAll('[data-id]')
            itens.forEach(item => {
                item.addEventListener('click', ()=>{
                    itens.forEach(item=>{
                        item.classList.remove('item-clicked', 'icon-clicked')
                    })
                    item.classList.add('item-clicked', 'icon-clicked')
                });
            })
    }, [])
    return(
        <ContainerNav>
            <Navitem
                icon={<ImFilm/>}
            />

            <Navitem
                icon={<RiNetflixFill/>}
            />

            <Navitem
                icon={<MdOutlineDeviceUnknown/>}
            />

            <Navitem
                icon={<ImFilm/>}
            />
        </ContainerNav>
    )
}

export default NavHorizontal;