import styled from "styled-components";

export const ContainerCardPresentation = styled.div`
    width: inherit;
    height: calc(100vh - 75px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    animation: presentation 1.2s ease-in-out forwards;

    #write-title-two{
        display: none;
        margin-top: 20px;
    }

    #write-title{
        display: none;
    }

    #nav-vertical{
        display: none;
    }

    @keyframes presentation {
        0%{
            transform: translateX(-50px);
            opacity: 0;
        }
        100%{
            transform: translateX(0px);
            opacity: 1;
        }
    }
`;

export const CardPresentation = styled.div`
    width: 750px;
    height: auto;
    padding: 2em 2em;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    border: 1px solid rgba(237, 0, 97, 1);
    box-shadow: inset 1px 1px 800px 1px rgba(237, 0, 97, 1), 0px 0px 10px 1px rgba(237, 0, 150, 1);
`;

export const ImageLogo = styled.img`
    width: 90px;
    height: auto;
    opacity: 0;
`;

export const TitleCardPresentation = styled.p`
    font-size: 32px;
    color: rgba(237, 0 ,97, 1);
    text-shadow: -1px 1px #FFF;
    text-align: justify;
    font-weight: 700;
`;

export const BoxImage = styled.div`
    width: 100%;
    height: 100px;
    padding: 0em 1em;
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin: 20px 0px;

    #tmdb{
        opacity: 0;
    }

    #netflix{
        opacity: 0;
    }

    #github{
        opacity: 0;

    }

    @keyframes image {
        0%{
            transform: translateX(-20px);
        }
        100%{
            transform: translate(0px);
            opacity: 1;
        }
    }
`;