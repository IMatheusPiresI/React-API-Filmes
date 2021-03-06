import styled from "styled-components";

export const ContainerNav = styled.nav`
    margin-top: 75px;
    width: 120px;
    height: calc(100vh - 75px);
    background-image: linear-gradient(to top, rgba(0,0,0, 0.3) , transparent);
    border-right: 1px solid rgba(232, 0, 97, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    gap: 12px;
    padding: 10px 0px;
    left: 0;
    z-index: 2 ;
    .item-clicked{
        box-shadow: 0px 0px 10px 0px rgb(232, 0, 97, .8);
        transform: scale(1);
}

    .icon svg{
        fill: rgba(232, 0, 97, 0.7);
        font-size: 35px;
        transition: ease .4s;
    }

    .icon-clicked svg{
        fill: rgba(232, 0, 97, 1);
        font-size: 45px;
        transition: ease .4s;
    }

    @media (max-width: 525px) {
        width: 95px;

        .icon svg{
            font-size: 35px;
        }

        .icon-clicked svg{
            font-size: 40px;
        }
    }

    @media (max-width: 390px) {
        width: 75px;

        .icon svg{
            font-size: 35px;
        }

        .icon-clicked svg{
            font-size: 40px;
        }
    }
`;