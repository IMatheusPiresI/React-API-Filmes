import styled from "styled-components";

export const ContainerContests = styled.div`
    margin-left: 120px;
    min-height: 100vh;
    width: calc(100% - 120px);
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
    background-image: linear-gradient(to bottom, rgba(0,0,0, 0.8) , transparent );
`;

export const BoxContents = styled.div`
    width: calc(100vw - 135px);
    min-height: calc(100vh - 75px);
    position: relative;
    top: 75px;

    p{
        color: rgba(232, 0, 97, 1);
        text-shadow: -1px 1px #fff;
    }
`;
