import styled from "styled-components";

export const ContainerCardPresentation = styled.div`
    width: inherit;
    min-height: calc(100vh - 75px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    animation: presentation 1.2s ease-in-out forwards;
    padding: 2em 1em;

    #write-title-two{
        display: none;
        margin-top: 20px;
    }

    #write-title{
        display: none;
        margin: 10px 0px;
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

    @media (max-width: 625px) {
        #write-title-two{
        margin-top: 10px;
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
    background-color: rgba(0, 0, 0, .15);
    border: 1px solid rgba(237, 0, 97, 1);
    box-shadow: inset 1px 1px 20px 1px rgba(237, 0, 97, 1), 0px 0px 10px 1px rgba(237, 0, 150, 1);

    @media (max-width: 900px){
        width: 100%;
    }

    @media (max-width: 300px){
        padding: 2em 1em;
    }
`;

export const BoxImage = styled.div`
    width: 0px;
    height: 0px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    transition: .5s;
    box-shadow: 0px 0px 15px 1px rgba(237, 0, 97), inset 0px 0px 15px 1px rgba(237, 0, 97);
`;

export const ImageLogo = styled.img`
    width: 100%;
    height: auto;
    opacity: 0;
`;

export const TitleCardPresentation = styled.p`
    font-size: 32px;
    color: rgba(237, 0 ,97, 1);
    text-shadow: -1px 1px #FFF;
    text-align: justify;
    font-weight: 700;

    @media (max-width: 705px) {
        font-size: 28px;
    }

    @media (max-width: 625px) {
        font-size: 24px;
    }
    
    @media (max-width: 545px) {
        font-size: 23px;
        text-align: justify;
    }

    @media (max-width: 450px){
        font-size: 19px;
    }

    
    @media (max-width: 300px){
        font-size: 18px;
    }
`;

export const ContainerBoxImage = styled.div`
    width: 100%;
    height: 100px;
    padding: 0em 1em;
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin: 40px 0px;
    gap: 30px;


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
            transform: translateX(-10px);
        }
        100%{
            transform: translate(0px);
            opacity: 1;
        }
    }

    @keyframes boximage {
        0%{
            width: 0px;
            height: 0px;
            transform: translateX(-20px);
        }
        100%{
            width: 120px;
            height: 100px;
            padding: 15px;
            transform: translateX(0px);
        }
    }

    @media (max-width: 705px) {
        padding: 0px;
            @keyframes boximage {
                0%{
                    width: 0px;
                    height: 0px;
                }
                100%{
                    width: 100px;
                    height: 90px;
                    padding: 15px;
                }
        }
    }

    @media (max-width: 625px) {
        margin: 30px 0px;
    }

    @media (max-width: 545px) {
        gap: 15px;
        @keyframes boximage {
                0%{
                    width: 0px;
                    height: 0px;
                }
                100%{
                    width: 75px;
                    height: 80px;
                    padding: 5px;
                }
        }
    }

    
    @media (max-width: 450px){
        gap: 15px;
        width: 100%;

        @keyframes boximage {
                0%{
                    width: 0px;
                    height: 0px;
                }
                100%{
                    width: 55px;
                    height: 70px;
                    padding: 5px;
                }
        }
    }

    @media (max-width: 390px) {

        @keyframes boximage {
                0%{
                    width: 0px;
                    height: 0px;
                }
                100%{
                    width: 45px;
                    height: 60px;
                    padding: 5px;
                }
        }
    }

    @media (max-width: 340px) {

@keyframes boximage {
        0%{
            width: 0px;
            height: 0px;
        }
        100%{
            width: 35px;
            height: 50px;
            padding: 5px;
        }
}
}
`;