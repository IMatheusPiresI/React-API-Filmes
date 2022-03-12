import styled from "styled-components";

export const ItemFilms = styled.div`
    display:  inline-block;
    width: 200px;
    height: 100%;
    transform: scale(.9);
    transition: all .3s ease;
    cursor: pointer;

    &:hover{
        transform: scale(1);
    }
`;

export const ImagePosterFilm = styled.img`
    width: 100%;
`;