import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";

function App() {

  const photos = useSelector<AppRootStateType, any>(state => state.photos.photos)
  return (
    <div className="App">
        Hello world
      {photos.map( (el: any) => {
        return  <>{el}</>
      })}
    </div>
  );
}

export default App;
