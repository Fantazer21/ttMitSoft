import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {Header} from "./ui/header/Header";
import Main from "./ui/main/main";






function App() {

  const photos = useSelector<AppRootStateType, any>(state => state.photos.photos)
  return (
    <div className="App">
       <Header/>
        <Main/>
    </div>
  );
}

export default App;
