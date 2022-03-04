import styled from "styled-components";

export const ContainerHeader = styled.nav`
    width: 100%;
    height: 75px;
    background-image: linear-gradient(to bottom, rgba(0,0,0, 0.5) , transparent );
    border-bottom: 1px solid rgba(232, 0, 97, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
`;

export const TitleHeader = styled.h1`
    font-size: 42px;
    color: #E80061;
    text-shadow: -1px 1px #FFF;
`;