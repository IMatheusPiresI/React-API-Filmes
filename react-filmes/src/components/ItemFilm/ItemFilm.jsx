import React, { useContext } from "react";
import { ItemFilms, ImagePosterFilm } from "./ItemFilmStyle";
import { useNavigate } from "react-router-dom";
import { DetailsProvider, DetailsContext } from "../../contexts/DetailsContext";

export const ItemFilm = ({src, alt, slug, film, type, video}) =>{
    const navigate = useNavigate()
    const {setIdFilm, setSlug, setType, setVideo} = useContext(DetailsContext);

    const WatchDetails = () =>{

        switch (slug) {
            case 'originals':
                navigate(`/tv/${film}`)
                setIdFilm(film)
                setSlug('originals')
                setType(type)
                setVideo(video)
            break;

            case 'trending':
                navigate(`/trending/${film}`)
                setIdFilm(film)
                setSlug('originals')
                setType(type)
                setVideo(video)
            break;

            case 'toprated':
                navigate(`/toprated/${film}`)
                setIdFilm(film)
                setSlug('originals')
                setType(type)
                setVideo(video)
            break;

            case 'action':
                navigate(`/action/${film}`)
                setIdFilm(film)
                setSlug('originals')
                setType(type)
                setVideo(video)
            break;

            case 'comedy':
                navigate(`/comedy/${film}`)
                setIdFilm(film)
                setSlug('originals')
                setType(type)
                setVideo(video)
            break;

            case 'horror':
                navigate(`/horror/${film}`)
                setIdFilm(film)
                setSlug('originals')
                setType(type)
                setVideo(video)
            break;

            case 'romance':
                navigate(`/romance/${film}`)
                setIdFilm(film)
                setSlug('originals')
                setType(type)
                setVideo(video)
            break;

            case 'documentary':
                navigate(`/documentary/${film}`)
                setIdFilm(film)
                setSlug('originals')
                setType(type)
                setVideo(video)
            break;
        }
    }
    return(
        <DetailsProvider>
            <ItemFilms onClick={WatchDetails}>
                <ImagePosterFilm src={src} alt={alt}/>
            </ItemFilms>
        </DetailsProvider>
    )
}

export default ItemFilm;