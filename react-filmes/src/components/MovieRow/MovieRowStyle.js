import styled from "styled-components";

export const ContainerRow = styled.div`
    width: calc(100vw - 135px);

    .icon{
        color: rgba(232, 0, 97, 1);
        font-size: 45px;
    }
`;

export const TitleSession = styled.h2`
    font-size: 35px;
    color: rgba(232, 0, 97, 1);
    text-shadow: -1px 1px #FFF;
    margin-left: 25px;
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
    background-color: #000;
`;