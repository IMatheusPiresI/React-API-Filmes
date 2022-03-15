import styled from "styled-components";

export const ContainerDetails = styled.div`
    width: 100%;
    height: 100%;
`;

export const BoxDetails = styled.div`
    width: 100%;
    height: calc(100vh - 75px);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-clip: border-box;
    z-index: 0;
`;

export const ShadowInfos = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(to right, rgba(0, 0, 0, .87) 30%, transparent 70%);
    z-index: 1;
`;

export const ShadowImage = styled.div`
    width: 100%; 
    height: 100%;
    position: absolute;
    background-image: linear-gradient(to top, rgba(0, 0, 0, .87) 30%, transparent 70%);
    z-index: 1;
`;

export const TitleDetails = styled.h2`
    color: rgba(232, 0, 97, 1);
    text-shadow: 1px 1px #fff;
    z-index: 100000000;
    font-size: 45px;
`;

export const ContainerInfo = styled.div`
    max-width: 500px;
    padding-left: 35px;
    padding-top: 70px;
`;

export const DescriptionDetails = styled.p`
    font-size: 17px;
    color: rgba(232, 0, 137, 1);
    text-shadow: 1px 1px rgba(255, 0, 200, .4);
    text-align: justify;
`;

export const BoxVoteYearSeason = styled.div`
    display: flex;
    gap: 20px;
    margin: 15px 0px;
    font-size: 18px;
`;

export const VoteDetails = styled.p`
    color: rgba(232, 0, 137, 1);
    text-shadow: 1px 1px rgba(255, 0, 200, 0.5);
`;

export const DateDetails = styled.p`
    color: rgba(232, 0, 137, 1);
    text-shadow: 1px 1px rgba(255, 0, 200, 0.5);
`;

export const SeasonsDetails = styled.p`
    color: rgba(232, 0, 137, 1);
    text-shadow: 1px 1px rgba(255, 0, 200, 0.5);
`;

export const BoxButtons = styled.div`
    display: flex;
    gap: 35px;

    .website{
        background-color: transparent;
        border: 1px solid rgba(232, 0, 137, 1);
        border-radius: 0px 150px;
        color: rgba(255, 0, 200, 1);
        width: 175px;
        transition: .3s ease-in-out;
        box-shadow: 1px 1px 10px 1px rgba(232, 0, 137, 1);
        
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
        box-shadow: 1px 1px 10px 1px rgba(232, 0, 137, 1);
        
        &:hover{
            border-radius: 0px 150px;
        }
    }
`;

export const LinkA = styled.a`
    text-decoration: none;
`;