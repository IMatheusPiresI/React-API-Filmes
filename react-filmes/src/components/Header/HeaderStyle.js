import styled from "styled-components";

export const ContainerHeader = styled.nav`
    width: 100%;
    height: 75px;
    border-bottom: 1px solid rgba(232, 0, 97, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;

    .link{
        text-decoration: none ;
    }
`;

export const TitleHeader = styled.h1`
    font-size: 42px;
    color: rgba(232, 0, 97, 1);
    text-shadow: -1px 1px #FFF;
    text-decoration: none ;
    cursor: pointer;
`;

export const Logo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    left: 30px ;
    cursor: pointer;
`;