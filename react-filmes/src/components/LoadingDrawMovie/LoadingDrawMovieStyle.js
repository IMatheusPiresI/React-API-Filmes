import styled from 'styled-components'

export const ImageDraw = styled.img`
    width: 150px;
    animation: image 5s linear infinite;

    @keyframes image{
        0%{
            transform: rotateY(0deg);
        }
        50%{
            transform: rotateY(180deg);
        }
        100%{
            transform: rotateY(360deg);
        }
    }
`;

export const BoxImageDraw = styled.div`
    border-radius: 50%;
    border: 1px solid rgba(237, 0, 97, 1);
    padding: 25px 40px;
    margin: 1em 2em;
    box-shadow: 0px 0px 10px 1px rgba(237, 0, 97, 1);
    background-color: rgba(230, 0, 97, .7);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: .5s ease-in-out;
    animation: loadingOpacity .6s linear;

    @keyframes loadingOpacity{
        0%{
            opacity: 0;
        }
        75%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`;