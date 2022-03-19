import styled from "styled-components";

export const ContainerDraw = styled.div`
    width: 100%;
    min-height: calc(100vh - 75px);
    background-color: #000;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(237, 0, 97, .1);
    padding: 2em 1em;

    .animate-card{
        transition: .6s;
        animation: cardOpacity .9s ease forwards;
    }

    @keyframes cardOpacity{
        0%{
            opacity: 0;
            transform: translateX(-50px);
        }
        50%{
            opacity: 0;
            transform: translateX(-50px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }
`;

export const BoxCardSortear = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(237, 0, 97, 1);
    background-color: rgba(237, 0, 97, .3);
    border-radius: 25px;
    box-shadow: 0px 0px 10px 1px rgba(237, 0, 97, .7);
    padding: 10px;
    opacity: 1;
`;

export const BoxCard = styled.div`
    margin-top: 90px;
    
    @media (max-width: 675px){
        margin-top: 50px;
    }
`;

export const BoxDrawButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
    border-bottom: 1px solid rgba(237, 0, 97, 1);
`;

export const DrawTitle = styled.h3`
    color: rgba(237, 0, 97, 1);
    text-shadow: -1px 0px #fff;
    font-size: 30px;

    @media (max-width: 675px){
        font-size: 25px;
    }

    @media (max-width: 595px){
        font-size: 20px;
    }

    @media (max-width: 485px){
        text-align: center;
    }
`;

export const DrawButton = styled.button`
    width: 250px;
    font-size: 27px;
    padding: 10px 20px;
    border-radius: 25px;
    border: 1px solid rgba(237, 0, 97, 1);
    background-color: rgba(0, 0, 0, .3);
    color: rgba(237, 0, 97, 1);
    text-shadow: -1px 0px rgba(255, 255, 255, .7);
    box-shadow: inset 1px 1px 20px 1px rgba(237, 0, 97, 1), 0px 0px 10px 1px rgba(237, 0, 97, 1);
    transform: scale(.9);
    transition: .3s ease-in-out;
    max-width: 350px;
    cursor: pointer;
    margin-bottom: 30px;

    &:hover{
        transform: scale(1);
    }

    @media (max-width: 675px){
        width: 200px;
        font-size: 23px;
    }

    @media (max-width: 595px){
        width: 150px;
        font-size: 17px;
    }
`;
