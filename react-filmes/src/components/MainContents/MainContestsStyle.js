import styled from "styled-components";

export const ContainerContests = styled.div`
    margin-left: 120px;
    min-height: 100vh;
    width: calc(100% - 125px);

    .watch-details{
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent);
    }

    @media (max-width: 525px){
        width: calc(100% - 95px);
        margin-left: 95px;
    }
`;

export const TitleContents = styled.h2`
    font-size: 45px;
    text-shadow: -1px 1px #FFF;
    color: rgba(232, 0, 97, 1);
    height: 75px;
    width: calc(100vw - 120px);
    text-align: center;
    border-bottom: 1px solid rgba(232, 0, 97, .5);
    position: fixed;
    z-index: 10;
    background-image: linear-gradient(to bottom, rgba(0,0,0, 0.5) , transparent );
    @media (max-width: 525px){
        width: calc(100vw - 95px);
    }
`;

export const BoxContents = styled.div`
    width: 100%;
    min-height: calc(100vh - 75px);
    position: relative;
    top: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const ContainerFilms = styled.div`
    width:  100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 52px;
    padding: 2em 1em;
`;

export const InputSearchMovie = styled.input`
    width: 70%;
    height: 45px;
    font-size: 25px;
    text-align: center;
    background-color: rgba(0, 0, 0, .2);
    outline: none;
    border: 1px solid rgba(232, 0, 97, 1);
    margin-top: 25px;
    color: rgba(232, 0, 97, 1);
    text-shadow: 1px 1px rgba(255, 255, 255, .5);
`;

