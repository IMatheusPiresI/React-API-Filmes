import styled from "styled-components";

export const ContainerRepos = styled.div`
    max-width: 450px;
    border-top: 1px solid rgba(237, 0, 97, .5);
    text-align: justify;
    padding: 1.5em 0em;

    &:last-child{
        border-bottom: 1px solid rgba(237, 0, 97, .5);
    }
`;

export const BoxTitlePrivate = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

export const TitleRepos = styled.a`
    text-decoration: none;
    align-items: center;
    cursor: pointer;
    color: rgba(237, 0, 97, 1);
    text-shadow: -1px 1px #000;
    font-size: 25px;
    &:hover{
        text-decoration: underline;
    }

    
    @media (max-width: 525px) {
        font-size: 22px;
    }
`;  

export const Public = styled.p`
    border-radius: 25px;
    border: 1px solid rgba(237, 0, 97, .5);
    padding: 4px 10px;
    margin-left: 15px;
    font-size: 11px;
    color: rgba(237, 0, 97, .7);
    background-color: rgba(0, 0, 0, .3);
`;

export const DescriptionRepos = styled.p`
    margin-bottom: 14px;
    font-size: 17px;
    color: rgba(200, 0, 100, 1);
    text-shadow: -1px 1px #000;

    @media (max-width: 525px) {
        font-size: 15px;
    }
`;

export const BoxLanguage = styled.div`
    display: flex;
    align-items: center;

    .javascript{
        background-color: rgba(241, 224, 90, 1);
    }

    .css{
        background-color: rgba(86, 61, 124, 1);
    }

    .html{
        background-color: rgba(227, 76, 38, 1);
    }

    .null{
        display: none;
    }
`;

export const ColorLanguage = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #000;
`;

export const Language = styled.p`
    margin-left: 5px;
    color: rgba(237, 0, 120, 1);
    text-shadow: -1px 1px rgba(0, 0, 0, 1);
    font-size: 14px;
`;