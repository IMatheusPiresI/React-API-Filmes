import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../layout/Home/Home";
import DeveloperContents from "../components/DeveloperContents/DeveloperContents";
import DrawContents from "../components/DrawContents/DrawContents";
import FilmContest from "../components/FilmContest/FilmContest";
import SearchMovieContents from "../components/SearchMovieContents/SearchMovie";
import PresentationContents from "../components/PresentationContents/PresentationContents";
import WatchDetails from "../components/WatchDetails/WatchDetails";
import { DetailsProvider } from "../contexts/DetailsContext";

const Routing = () =>{
    return(
        <DetailsProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>}>
                        <Route path='/' element={<PresentationContents/>}/>
                        <Route path='/film' element={<FilmContest/>}/>
                        <Route exact path='/search' element={<SearchMovieContents/>}/>
                        <Route path='/draw' element={<DrawContents/>}/>
                        <Route path='/developer' element={<DeveloperContents/>}/>
                        <Route path='/:type/:id' element={<WatchDetails/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </DetailsProvider>
    )
}

export default Routing;