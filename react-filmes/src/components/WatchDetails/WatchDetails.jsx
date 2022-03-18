import React, { useContext, useEffect, useState } from "react";
import { apiWatchDetailsMovies, apiWatchDetailsSeries } from "../../api/apiWatchDetails";
import { DetailsContext } from "../../contexts/DetailsContext";
import ButtonDetails from "../ButtonDetails/ButtonDetails";
import Loading from "../Loading/Loading";
import { ContainerContests, BoxContents, TitleContents } from "../SearchMovieContents/SearchMovieStyle";
import { ContainerDetails, BoxDetails, ShadowInfos, ShadowImage, TitleDetails, ContainerInfo, DescriptionDetails, BoxVoteYearSeason, InfoVoteDateSeason, BoxButtons, LinkA, Genres } from "./WatchDetailsStyle";
import Language from '@material-ui/icons/Language'
import Code from '@material-ui/icons/Code'
import { useNavigate } from "react-router-dom";
import ViewMore from "../ModalViewMore/ViewMore";

const WatchDetails = () =>{
    const [details, setDetails] = useState([]);
    const { idFilm, video } = useContext(DetailsContext);
    const [date, setDate] = useState(0);
    const [numberSeason, setNumberSeason] = useState('');
    const [genres, setGenres] = useState([]);
    const [description, setDescription] = useState('');
    const [viewModal, setViewModal] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const Details = async() =>{
            if(await idFilm !== 0 ){
                localStorage.setItem('film', JSON.stringify(idFilm));
                localStorage.setItem('video', JSON.stringify(video === false || video === true ? video : 'undefined'));
            }
                const film = await JSON.parse(localStorage.getItem('film'));
                const videoFilm = await JSON.parse(localStorage.getItem('video'));
                
                if(videoFilm === false || videoFilm === true){
                    await apiWatchDetailsMovies(film).get().then(res =>{
                        setDetails(res.data)
                        console.log(res.data)
                        const releaseDate = new Date(res.data.release_date)
                        console.log(releaseDate)
                        setNumberSeason('')
                        if(releaseDate !== undefined){
                            setDate(releaseDate.getFullYear())
                        }

                       if(res.data.backdrop_path !== null){
                        document.querySelector('#details').style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + res.data.backdrop_path + "')";
                       }else{
                        document.querySelector('#details').style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + res.data.poster_path + "')";
                       }

                        let genress = []
                        for(let i in res.data.genres){
                            genress.push(res.data.genres[i].name);
                        }
                        setGenres(genress)

                        if(res.data.overview.length > 250){
                            setDescription(res.data.overview.substring(0, 250) + '...');
                            document.querySelector('#viewMore').style.display = 'flex'
                        }else{
                            setDescription(res.data.overview);
                        }
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
                        let genress = []
                        for(let i in res.data.genres){
                            genress.push(res.data.genres[i].name);
                        }
                        setGenres(genress)

                        if(res.data.backdrop_path !== null){
                            document.querySelector('#details').style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + res.data.backdrop_path + "')";
                           }else{
                            document.querySelector('#details').style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + res.data.poster_path + "')";
                           }

                        if(res.data.overview.length > 250){
                            setDescription(res.data.overview.substring(0, 250) + '...');
                            document.querySelector('#viewMore').style.display = 'flex'
                        }else{
                            setDescription(res.data.overview);
                        }
                    })
                }
            }
            Details();
    },[idFilm, video])

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
                                        <InfoVoteDateSeason>{details.vote_average * 10}% relevante</InfoVoteDateSeason>
                                        <InfoVoteDateSeason>{date}</InfoVoteDateSeason>
                                        <InfoVoteDateSeason>{numberSeason}</InfoVoteDateSeason>
                                    </BoxVoteYearSeason>
                                    <DescriptionDetails>{description}<span id="viewMore" onClick={() => setViewModal(true)}>ver mais</span></DescriptionDetails>
                                    <BoxButtons>
                                        <LinkA href={details.homepage} target='_blank'>
                                            <ButtonDetails
                                                className={'website'}
                                                name={'Site'}
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
                                    <Genres><span>Gêneros:</span> {genres.join(', ')}</Genres>
                                    {viewModal ? 
                                    <ViewMore
                                        onClose={() => setViewModal(false)}
                                        overview={details.overview}
                                    /> : null}
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