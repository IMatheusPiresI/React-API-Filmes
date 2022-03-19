import styled from "styled-components";

export const ContainerDetails = styled.div`
    width: 100%;
    height: 100%;
`;

export const BoxDetails = styled.div`
    width: calc(100vw - 120px);
    min-height: calc(100vh - 75px);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-clip: border-box;
    background-position: fixed;
    z-index: 0;
    position: fixed;

    @media (max-width: 525px){
        width: calc(100vw - 95px);
    }

    @media (max-width: 390px){
        width: calc(100vw - 75px);
    }
`;

export const ShadowInfos = styled.div`
    width: calc(100vw - 120px);
    height: 100%;
    position: absolute;
    background-image: linear-gradient(to right, rgba(0, 0, 0, .87) 30%, transparent 70%);
    z-index: 1;

    
    @media (max-width: 525px){
        width: calc(100vw - 95px);
    }
`;

export const ShadowImage = styled.div`
    width: calc(100vw - 120px);
    height: 100%;
    position: absolute;
    background-image: linear-gradient(to top, rgba(0, 0, 0, .87) 30%, transparent 70%);
    z-index: 1;

    @media (max-width: 525px){
        width: calc(100vw - 95px);
    }

    @media (max-width: 390px){
        width: calc(100vw - 75px);
    }
`;

export const TitleDetails = styled.h2`
    color: rgba(232, 0, 97, 1);
    text-shadow: 1px 1px #fff;
    z-index: 100000000;
    font-size: 45px;

    @media (max-width: 965px){
        font-size: 32px;
    }

    @media (max-width: 390px){
        font-size: 28px;
    }

    @media (max-width: 350px){
        font-size: 25px;
    }
`;

export const ContainerInfo = styled.div`
    max-width: 500px;
    padding-left: 35px;
    padding-top: 70px;

    @media (max-width: 965px){
        width: 400px;
    }

    @media (max-width: 800px){
        width: 330px;
    }

    @media (max-width: 515px){
        width: 100%;
        padding: 80px 20px 0px 20px;
    }

    @media (max-width: 390px){
        width: 100%;
        padding: 80px 20px 0px 20px;
    }
`;

export const DescriptionDetails = styled.p`
    font-size: 19px;
    color: rgba(232, 0, 137, 1);
    text-shadow: 1px 1px rgba(0, 0, 0, 1);
    text-align: justify;

    span{
        font-size: 18px;
        font-weight: 400;
        display: none;
        cursor: pointer;
         &:hover{
             text-decoration: underline;
         }
    }

    @media (max-width: 965px){
        font-size: 17px;
    }

    @media (max-width: 390px){
        font-size: 15px;
    }

    @media (max-width: 350px){
        font-size: 13px;
    }
`;

export const BoxVoteYearSeason = styled.div`
    display: flex;
    gap: 10px;
    margin: 15px 0px;
    font-size: 18px;

    @media (max-width: 390px){
        font-size: 18px;
    }

    @media (max-width: 336px){
        font-size: 12px;
        gap: 5px;
    }
`;

export const InfoVoteDateSeason = styled.p`
    color: rgba(232, 0, 137, 1);
    text-shadow: 1px 1px rgba(0, 0, 0, 1);

    @media (max-width: 420px){
        font-size: 15px;
    }

    @media (max-width: 350px){
        font-size: 12px;
    }
`;
export const BoxButtons = styled.div`
    display: flex;
    gap: 35px;
    margin-top: 20px;
    justify-content: space-between;

    .website{
        background-color: transparent;
        border: 1px solid rgba(232, 0, 137, 1);
        border-radius: 0px 150px;
        color: rgba(255, 0, 200, 1);
        width: 175px;
        transition: .3s ease-in-out;
        box-shadow: 1px 1px 10px 1px rgba(232, 0, 137, 1), inset 0px 0px 10px 1px rgba(232, 0, 137, 1);
        text-shadow: 1px 1px rgba(0, 0, 0, 1);
        
        &:hover{
            border-radius: 150px 0px;
        }
    }

    .developer{
        background-color: transparent;
        border: 1px solid rgba(232, 0, 137, 1);
        border-radius: 150px 0px;
        color: rgba(255, 0, 200, 1);
        width: 175px;
        transition: .3s ease-in-out;
        box-shadow: 1px 1px 10px 1px rgba(232, 0, 137, 1), inset 0px 0px 10px 1px rgba(232, 0, 137, 1);
        text-shadow: 1px 1px rgba(0, 0, 0, 1);
        
        &:hover{
            border-radius: 0px 150px;
        }
    }

    @media (max-width: 965px){
        .website, .developer{
            width: 155px;
        }
    }

    @media (max-width: 800px){
        .website, .developer{
            width: 135px;
            font-size: 13px;
        }
    }

    @media (max-width: 430px){
        gap: 10px;
        .website, .developer{
            width: 120px;
            font-size: 11px;
        }
    }

    @media (max-width: 350px){
        gap: 5px;
        .website, .developer{
            width: 100px;
            font-size: 9px;
        }
    }

    @media (max-width: 350px){
        flex-direction: column;
        .website, .developer{
            width: 100%;
        }
    }
`;

export const LinkA = styled.a`
    text-decoration: none;
`;

export const Genres = styled.p`
    font-size: 25px;
    color: rgba(232, 0, 137, 1);
    text-shadow: -1px 1px rgba(255, 255, 255, .2);
    margin-top: 20px;
    text-align: justify;

    span{
        font-weight: bold;
        text-shadow: -1px 1px rgba(255, 255, 255, .1);
    }

    @media (max-width: 965px){
        font-size: 20px;
    }
`;