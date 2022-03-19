import styled from "styled-components";

export const ContainerRow = styled.div`
    width: calc(100vw - 135px);
    animation: Visible 1.5s ease;
    margin: 20px 0px;
    
    .icon{
        color: rgba(232, 0, 97, 1);
        font-size: 45px;
    }


    @keyframes Visible{
        0%{
            opacity: 0;
        }
        70%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

    @media (max-width: 525px){
        width: calc(100vw - 110px);
    }

    @media (max-width: 390px){
        width: calc(100vw - 90px);
    }
`;

export const TitleSession = styled.h2`
    font-size: 35px;
    color: rgba(232, 0, 97, 1);
    text-shadow: -1px 1px #FFF;
    margin-left: 25px;

    @media (max-width: 800px){
        font-size: 28px;
    }

    @media (max-width: 600px){
        font-size: 24px;
    }

    @media (max-width: 500px){
        font-size: 22px;
        margin-left: 25px;
    }

    @media (max-width: 400px){
        font-size: 20px;
    }

    @media (max-width: 340px){
        font-size: 18px;
    }

    @media (max-width: 315px){
        font-size: 15px;
    }
`;

export const MovieListArea = styled.div`
    overflow-x: hidden;
    padding-left: 25px;
    &:hover{
        .row-left{
            opacity: 1;
        }

        .row-rigth{
            opacity: 1;
        }
    }

    @media (max-width: 500px){
        padding-left: 25px;
    }
`;


export const MovieRowLeft = styled.div`
    position: absolute;
    width: 40px;
    height: 300px;
    background-image: linear-gradient(to right, rgba(255, 0, 120, .7), transparent);
    left: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: .3s;
`;

export const MovieRowRigth = styled.div`
    position: absolute;
    width: 40px;
    height: 300px;
    background-image: linear-gradient(to left, rgba(255, 0, 120, .7), transparent);
    right: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: .3s;
`;

export const MovieRowList = styled.div`
    transition: .4s;
`;

