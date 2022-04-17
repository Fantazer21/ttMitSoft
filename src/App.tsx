import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {Header} from "./ui/header/Header";
import {Route, Routes} from "react-router-dom";
import {routePath} from "./bll/routePaths";
import AboutMe from "./ui/aboutMe/AboutMe";
import Gallery from "./ui/gallery/Gallery";
import Details from "./ui/details/details";

function App() {

  const photos = useSelector<AppRootStateType, any>(state => state.photos.photos)
  return (
    <div className="App">
       <Header/>
        <h1>dsadsadasdas</h1>
        <h1>'dsad</h1>
        <Routes>
            <Route path={routePath.ABOUT_ME} element={<AboutMe/>}/>
            <Route path={routePath.GALLERY} element={<Gallery/>}/>
            <Route path={routePath.DETAILS} element={<Details/>}/>
        </Routes>
    </div>
  );
}

export default App;
