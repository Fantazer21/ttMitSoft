import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import s from "../gallery/styles.module.css";
import {routePath} from "../../bll/routePaths";

const Details = () => {
    const location = useLocation()
    const { id,url, title }: any = location.state
    return (
        <div>
            <h1>Product id: {id}</h1>
            <h1>Product url: {url}</h1>
            <h1>Product title: {title}</h1>
            <NavLink className={s.navLink} to={routePath.MAIN} >
                BACK
            </NavLink>
        </div>
    );
};

export default Details;

