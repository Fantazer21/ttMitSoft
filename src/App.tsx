import React from 'react';
import './App.css';
import {Header} from "./ui/header/Header";
import {Route, Routes} from "react-router-dom";
import {routePath} from "./bll/routePaths";
import AboutMe from "./ui/aboutMe/AboutMe";
import Gallery from "./ui/gallery/Gallery";
import Details from "./ui/details/details";
import Main from './ui/main/Main';

function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={routePath.MAIN} element={<Main/>}/>
                <Route path={routePath.ABOUT_ME} element={<AboutMe/>}/>
                <Route path={routePath.GALLERY} element={<Gallery/>}/>
                <Route path={routePath.DETAILS} element={<Details/>}/>
            </Routes>
        </div>
    );
}

export default App;
