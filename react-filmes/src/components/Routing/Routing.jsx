import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../layout/Home/Home";
import DeveloperContents from "../DeveloperContents/DeveloperContents";
import DrawContents from "../DrawContents/DrawContents";
import FilmContest from "../FilmContest/FilmContest";
import MainContests from "../MainContents/MainContests";
import NetflixContest from "../NetflixContest/NetflixContest";

const Routing = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}>
                    <Route exact path='/search' element={<MainContests/>}/>
                    <Route path='/' element={<FilmContest/>}/>
                    <Route path='/netflix' element={<NetflixContest/>}/>
                    <Route path='/draw' element={<DrawContents/>}/>
                    <Route path='/developer' element={<DeveloperContents/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;