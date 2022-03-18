import styled from "styled-components";

export const BoxItem = styled.div`
    width: 95px;
    height: 95px;
    border: 1px solid rgba(232, 0, 97, 0.7);;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 0px rgba(232, 0, 97, .2);;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: scale(.9);
    transition: ease .4s ;
    cursor: pointer;

    &:hover{
        transform: scale(1);
        box-shadow: 0px 0px 10px 0px rgba(232, 0, 97, .8);;
        transition: ease .4s;

        svg{
            transition: ease .4s;
        }
    }

    @media (max-width: 525px) {
        width: 75px;
        height: 75px;
    }

    @media (max-width: 390px) {
        width: 65px;
        height: 70px;
    }

`;

export const Icon = styled.div`

`;