import React, { useEffect } from "react";
import Navitem from "../NavItem/Navitem";
import { ContainerNav } from "./NavVerticalStyle";
import { ImFilm } from 'react-icons/im'
import { RiSearchEyeLine } from 'react-icons/ri'
import { MdOutlineDeviceUnknown } from 'react-icons/md'
import Code from '@material-ui/icons/Code';

const NavVertical = () =>{
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
                path={'/film'}
                icon={<ImFilm/>}
            />

            <Navitem
                path={'/search'}
                icon={<RiSearchEyeLine/>}
            />

            <Navitem
                path={'/draw'}
                icon={<MdOutlineDeviceUnknown/>}
            />

            <Navitem
                path={'/developer'}
                icon={<Code/>}
            />
        </ContainerNav>
    )
}

export default NavVertical;