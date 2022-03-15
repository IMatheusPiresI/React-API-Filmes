import styled from "styled-components";

export const ContainerDeveloper = styled.section`
    width: 100%;
    height: 100%;
    padding: 3em 0em 0em 0em;

    .line{
        position: relative;
        top: 52px;
    }
`;


export const BoxCloneItemGit = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1em;
`;

export const BoxCloneGit = styled.div`
    display: flex; 
`;

export const ContainerCloneGit = styled.div`
    display:  flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0em 1.5em;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const BoxImageDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5em 1.5em 0em 1.5em;
    width: 350px;

    
    @media (max-width: 525px) {
        max-width: 100%;
    }
`;

export const BoxRepos = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0em 1.5em;

    @media (max-width: 900px) {
        margin-top: 2em;
    }
`;

export const ImageDeveloper = styled.img`
    border-radius: 50%;
    width: 300px;
    height: auto;
    border: 1px solid rgba(237, 0, 97, 1);
    position: relative;
    top: -30px;
    box-shadow: 0px 0px 10px 1px rgba(237, 0, 97, .8);

    @media (max-width: 525px) {
        max-width: 100%;
    }
`;

export const BoxInfoDeveloper = styled.div`
    width: 100%;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    word-wrap: break-word;
`;

export const Name = styled.p`
    color: rgba(237, 0, 97, 1);
    text-shadow: -1px 1px #000;
    font-size: 35px;

    @media (max-width: 525px) {
        font-size: 30px;
    }
`;

export const NameUser = styled.p`
    color: rgba(237, 0, 97, .7);
    font-size: 24px;
    margin-bottom: 18px;
    text-shadow: -1px 1px #000;

    @media (max-width: 525px) {
        font-size: 19px;
    }
    
`;

export const Bio = styled.p`
    color: rgba(237, 0, 97, 1);
    text-shadow: -1px 1px #000;
    font-size: 20px;
    margin-bottom: 20px;

    @media (max-width: 525px) {
        font-size: 17px;
    }
`;

export const Location = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(237, 0, 97, 1);
    text-shadow: -1px 1px #000;
    gap: 11px;
    font-size: 18px;
    margin-bottom: 8px;

    @media (max-width: 525px) {
        font-size: 15px;
    }
`;


export const Blog = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(237, 0, 97, 1);
    text-shadow: -1px 1px #000;
    gap: 5px;
    font-size: 18px;

    &:hover{
        text-decoration: underline;
    }

    @media (max-width: 525px) {
        font-size: 15px;
    }

`;