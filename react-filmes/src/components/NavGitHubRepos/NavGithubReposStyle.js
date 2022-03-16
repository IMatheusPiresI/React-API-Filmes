import styled from "styled-components";

export const BoxNavItemGit = styled.div`
    width: 250px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 25px;
    color:  rgba(237,0,97, 1);
    text-shadow: -1px 1px #FFF;
    border-bottom: 2px solid rgba(237,0,97, 1);
    padding: 10px 20px;
    margin-bottom: 20px;

    @media (max-width: 365px){
        width: 180px;
        padding: 10px 0px;
        font-size: 20px;
    }

    @media (max-width: 295px) {
        width: 150px;
        padding: 10px 0px;
        font-size: 16px;
    }
`;
export const NumRepo = styled.p`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(237, 0, 97, 0.8);
    color: #FFF;
    text-shadow: -1px 1px rgba(0, 0, 0, 1);
    font-size: 14px;
    padding: 5px;

    @media (max-width: 295px) {
        font-size: 10px;
    }
`;

export const ContainerNavGit = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;