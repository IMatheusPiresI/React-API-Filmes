import styled from "styled-components";

export const ContainerDraw = styled.div`
    width: 100%;
    min-height: calc(100vh - 75px);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(237, 0, 97, .1);
    padding: 2em 0em;

    .line{
        position: relative;
        top: 200px;
    }

    .animate-card{
        transition: .6s;
        animation: cardOpacity .6s ease-in-out forwards;
    }

    @keyframes cardOpacity{
        0%{
            opacity: 0;
        }
        75%{
            opacity: 0;
        }
        100%{
            opacity: 1;
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
`;

export const BoxDrawButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
`;

export const DrawTitle = styled.h3`
    color: rgba(237, 0, 97, 1);
    text-shadow: -1px 0px #fff;
    font-size: 30px;
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

    &:hover{
        transform: scale(1);
    }
`;
