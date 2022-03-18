import React from "react";
import { ContainerModal, BoxOverview, Overview, ButtonClose } from './ViewMoreStyle'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const ViewMore = ({id = 'modal', overview, onClose = () =>{}}) =>{

    const handleOutsideClick = (e) =>{
        if(e.target.id === id){
            onClose();
        }
    }

    return(
        <ContainerModal id={id} onClick={handleOutsideClick}>
            <BoxOverview>
                <Overview>{overview}</Overview>
            </BoxOverview>
            <ButtonClose onClick={onClose}>Fechar</ButtonClose>
        </ContainerModal>
    )
}

export default ViewMore;