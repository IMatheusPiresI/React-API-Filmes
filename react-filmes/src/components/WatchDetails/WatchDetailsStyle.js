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
    background-image: linear-gradient(to right, rgba(0, 0, 0, .80) 30%, transparent 70%);
    z-index: 1;
`;

export const ShadowImage = styled.div`
    width: 100%; 
    height: 100%;
    position: absolute;
    background-image: linear-gradient(to top, rgba(0, 0, 0, .80) 30%, transparent 70%);
    z-index: 1;
`;

export const TitleDetails = styled.h2`
    color: rgba(232, 0, 97, 1);
    text-shadow: 1px 1px #fff;
    z-index: 100000000;
    font-size: 45px;
`;

export const ContainerInfo = styled.div`
    max-width: 600px;
    padding-left: 35px;
    padding-top: 70px;
`;

export const DescriptionDetails = styled.p`
    font-size: 17px;
    color: rgba(232, 0, 97, 1);
    text-shadow: 0px 1px #fff;
`;

export const BoxVoteYearSeason = styled.div`
    display: flex;
    gap: 20px;
`;

export const VoteDetails = styled.p`
    color: green;
`;

export const DateDetails = styled.p`
    color: white;
`;

export const SeasonsDetails = styled.p`
    color: white;
`;