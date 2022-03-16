import React, { useContext, useEffect, useState } from "react";
import { apiWatchDetailsMovies, apiWatchDetailsSeries } from "../../api/apiWatchDetails";
import { DetailsContext } from "../../contexts/DetailsContext";
import ButtonDetails from "../ButtonDetails/ButtonDetails";
import Loading from "../Loading/Loading";
import { ContainerContests, BoxContents, TitleContents } from "../SearchMovieContents/SearchMovieStyle";
import { ContainerDetails, BoxDetails, ShadowInfos, ShadowImage, TitleDetails, ContainerInfo, DescriptionDetails, BoxVoteYearSeason, VoteDetails, DateDetails, SeasonsDetails, BoxButtons, LinkA } from "./WatchDetailsStyle";
import Language from '@material-ui/icons/Language'
import Code from '@material-ui/icons/Code'
import { useNavigate } from "react-router-dom";

const WatchDetails = () =>{
    const [details, setDetails] = useState([]);
    const { slug, idFilm, type, video } = useContext(DetailsContext);
    const [date, setDate] = useState(0);
    const [numberSeason, setNumberSeason] = useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        const Details = async() =>{
            console.log(idFilm)
            console.log(slug)
            console.log(type)
            console.log(video)
            if(await idFilm !== 0 ){
                localStorage.setItem('film', JSON.stringify(idFilm));
                localStorage.setItem('slug', JSON.stringify(slug));
                localStorage.setItem('type', JSON.stringify(type === undefined ? 'undefined' : type));
                localStorage.setItem('video', JSON.stringify(video === false ? video : 'undefined'));
            }
                const film = await JSON.parse(localStorage.getItem('film'));
                const slugFilm = await JSON.parse(localStorage.getItem('slug'));
                const typeFilm = await JSON.parse(localStorage.getItem('type'));
                const videoFilm = await JSON.parse(localStorage.getItem('video'));
                
                console.log(slugFilm)
                console.log(typeFilm)
                console.log(videoFilm)
                if(videoFilm === false){
                    await apiWatchDetailsMovies(film).get().then(res =>{
                        setDetails(res.data)
                        console.log(res.data)
                        const releaseDate = new Date(res.data.release_date)
                        console.log(releaseDate)
                        setNumberSeason('')
                        if(releaseDate !== undefined){
                            setDate(releaseDate.getFullYear())
                        }
                        document.querySelector('#details').style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + res.data.backdrop_path + "')";
                    })
                }else{
                    await apiWatchDetailsSeries(film).get().then(res =>{
                        setDetails(res.data)
                        console.log(res.data)
                        console.log(res.data.first_air_date)
                        const firstDate = new Date(res.data.first_air_date)
                        setDate(firstDate.getFullYear())
                        if(res.data.number_of_seasons > 1){
                            setNumberSeason(res.data.number_of_seasons + ' temporadas')
                        }else{
                            setNumberSeason(res.data.number_of_seasons + ' temporada')
                        }
                        document.querySelector('#details').style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + res.data.backdrop_path + "')";
                    })
                }
            }
            Details();
    },[idFilm, slug, type, video])

    return(   
        <ContainerContests>
            <TitleContents data-title = 'title' className="watch-details">Watch Details</TitleContents>
            <BoxContents>
                {details !== [] ? 
                <ContainerDetails>
                    <BoxDetails id="details">
                        <ShadowInfos>
                            <ShadowImage>
                                <ContainerInfo>
                                    <TitleDetails>{details.name !== undefined ? details.name : details.title}</TitleDetails>
                                    <BoxVoteYearSeason>
                                        <VoteDetails>{details.vote_average * 10}% relevante</VoteDetails>
                                        <DateDetails>{date}</DateDetails>
                                        <SeasonsDetails>{numberSeason}</SeasonsDetails>
                                    </BoxVoteYearSeason>
                                    <DescriptionDetails>{details.overview}</DescriptionDetails>
                                    <BoxButtons>

                                        <LinkA href={details.homepage} target='_blank'>
                                            <ButtonDetails
                                                className={'website'}
                                                name={'Visite o Site'}
                                                icon={<Language/>}
                                            />
                                        </LinkA>

                                        <ButtonDetails
                                            className={'developer'}
                                            name={'Developer'}
                                            icon={<Code/>}
                                            click={()=> navigate('/developer')}
                                        />
                                    </BoxButtons>
                                </ContainerInfo>
                            </ShadowImage>
                        </ShadowInfos>
                    </BoxDetails>
                </ContainerDetails>
                : <Loading/>}
            </BoxContents>
        </ContainerContests>
    )
}

export default WatchDetails;