import styled from "styled-components";

export const ContainerHeader = styled.nav`
    width: 120px;
    height: 75px;
    border-right: 1px solid rgba(232, 0, 97, 0.5);
    border-bottom: 1px solid rgba(232, 0, 97, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 100 ;

    .link{
        text-decoration: none ;
    }

    @media (max-width: 525px) {
        width: 95px;
    }

    @media (max-width: 390px) {
        width: 75px;
    }
`;

export const Logo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(.9);
    transition: ease .3s;

    &:hover{
        transform: scale(1);
    }
`;

export const BoxLogo = styled.div`
    display: flex;
`;