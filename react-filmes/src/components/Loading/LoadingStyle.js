import styled from "styled-components";

export const ContainerLoading = styled.div`
    position: fixed;
    width: calc(100vw - 125px);
    height: calc(100vh - 75px);
    top: 75px;
    bottom: 0;
    left: 120px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    background-color: rgb(233,57,120);

    @media (max-width:525px) {
        width: calc(100vw - 95px);
        left: 95px;
    }
`;

export const ImageLoading = styled.img`
    width: 200px;
    top: 75px;
    bottom: 0;
    left: 120px;
    right: 0;

    @media (max-width: 350px) {
        width: 100px;
    }
`;