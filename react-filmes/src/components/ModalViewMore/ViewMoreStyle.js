import styled from "styled-components";

export const ContainerModal = styled.div`
    position: fixed;
    top: 75px;
    left: 120px;
    background-color: rgba(0, 0, 0, .7);
    width: calc(100vw - 120px);
    height: calc(100vh - 75px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;

    @media (max-width: 525px) {
        width: calc(100vw - 95px);
        left: 95px;
    }

    @media (max-width: 390px) {
        width: calc(100vw - 75px);
        left: 75px;
    }
`;

export const BoxOverview = styled.div`
    width: 500px;
    height: 500px;
    margin-left: 5px;
    overflow-y: scroll;
    background-image: linear-gradient( to bottom,rgb(3,22,27,1), rgb(148,14,50,1));
    padding: 1em;
    box-shadow: inset 0px 0px 10px 1px rgba(237, 0, 97, 1), 0px 0px 30px 1px rgba(237, 0, 97, 1);

    ::-webkit-scrollbar-thumb{
        background-image: linear-gradient( to bottom,rgb(3,22,27,1) 30%, rgb(148,14,50,1));
        border-radius: 5px;
        box-shadow: inset 0px 0px 10px 1px rgba(237, 0, 97, 1);
    }

    @media (max-width: 680px) {
        width: 350px;
        height: 350px;
    }

    @media (max-width: 495px) {
        width: 300px;
        height: 300px;
    }

    @media (max-width: 430px) {
        width: 250px;
        height: 300px;
    }

    @media (max-width: 355px) {
        width: 200px;
        height: 300px;
    }
`;

export const Overview = styled.p`
    font-size: 18px;
    color: rgba(237, 0, 97, 1);
    text-shadow: -1px 1px rgba(0, 0, 0, 1);
    text-align: justify;
`;

export const ButtonClose = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border: 1px solid rgba(237, 0, 97, 1);
    border-radius: 25px;
    margin-top: 20px;
    color: rgba(237, 0, 97, 1);
    text-shadow: -1px 1px #000;
    box-shadow: inset 0px 0px 10px 1px rgba(237, 0, 97, 1), 0px 0px 10px 1px rgba(237, 0, 97, 1);
    background-image: linear-gradient( to left,rgb(3,22,27,1) , rgb(148,14,50,1) 90%);;
    transition: .2s;
    cursor: pointer;

    &:hover{
        padding: 10px 30px;
        box-shadow: inset 0px 0px 15px 1px rgba(237, 0, 97, 1), 0px 0px 20px 1px rgba(237, 0, 97, 1);
    }
`;