import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../layout/Home/Home";

const Routing = () =>{
return(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />}/>
        </Routes>
    </BrowserRouter>
)
}

export default Routing;