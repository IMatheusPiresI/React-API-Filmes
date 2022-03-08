import styled from "styled-components";

export const CardSearch = styled.div`
    width: 700px;
    height: calc(100% - 10px);
    background-color: rgba(0, 0, 0, .2);
    border: 1px solid rgba(232, 0, 97, 1);
    border-radius: 15px;
    text-align: center;
    gap: 15px;
    box-shadow: 1px -4px 10px 1px rgba(232, 0, 97, .8) ;
    transform: scale(.95);
    transition: .2s ease;



    &:hover{
        transform: scale(1);
        img{
            transform: scale(1.015);
            box-shadow: 1px 1px 5px 0px rgba(232, 0, 97, 1) ;;
        }
    }
`;

export const TitleCard = styled.h2`
    color: rgba(232, 0, 97, .9);
    text-shadow: 1px 1px #FFF;
    width: 100%;
    padding: 0px 20px;
    font-size: 28px;
    padding-right: 10px;
    margin-top: 20px;
    margin-bottom: 40px;
`;

export const PosterCard = styled.img`
    width: 100%;
    height: inherit ;
    margin: 0px 15px 0px 0px;
    transform:  scale(.95);
    transition: .2s ease;
    box-shadow: 1px 1px 20px 0px rgba(232, 0, 97, 1) ;;
`;

export const SynopsisCard = styled.p`
    font-size: 17px;
    color: rgba(232, 0, 97, 1);
    text-shadow: 1px 1px #fff;
    text-align: justify;
    padding-right: 20px;
    margin-left: 10px;
    margin-bottom: 25px;
`;

export const BoxPoster = styled.div`
    width: 300px;
    height: 100%;
    float: left;
    margin: 0px 20px 0px 0px;
    border-radius: 15px 0px 0px 15px;
    border-right: 1px solid rgba(232, 0, 97, 1);
    border-bottom: 1px solid rgba(232, 0, 97, 1);
    overflow-x: hidden;
`;

export const AdultBox = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: rgba(232, 0, 97, 1);
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0px;
    top: -20px;
    z-index: 10;
    border: 5px solid rgba(255, 255, 255, .6);
`;

export const RecommendationAdult = styled.p`
    font-size: 25px;
    color: rgba(255, 255, 255, .6);
    text-shadow: 1px 1px rgba(0, 0, 0, 1);
`;