import React, { createContext, useState } from "react";

export const DetailsContext = createContext();

export const DetailsProvider = ({ children }) =>{
    const [idFilm, setIdFilm] = useState(0)
    const [slug, setSlug] = useState('')
    const [type, setType] = useState('')
    const [video, setVideo] = useState('')

    return(
        <DetailsContext.Provider value = {{setIdFilm, idFilm, setSlug, slug, setType, type, setVideo, video}}>
            {children}
        </DetailsContext.Provider>
    )
}


