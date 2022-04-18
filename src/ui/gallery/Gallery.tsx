import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import Image from "react-bootstrap/Image";
import s from './styles.module.css'
import {routePath} from "../../bll/routePaths";
import {NavLink} from "react-router-dom";
import {fetchPhotosAC} from "../../bll/photosReducer";



type buttonId = {
    buttonID: null | number,
    category: null | number,
}

const Gallery = () => {
    const photos = useSelector<AppRootStateType, any>(state => state.photos.photos)
    const delay = useSelector<AppRootStateType, any>(state => state.photos.delay)
     const  [active, setActive] = useState<buttonId> ({buttonID: null, category: null})
    const dispatch =useDispatch()

   useEffect(()=> {
       dispatch(fetchPhotosAC())
   },[])
    const sorting = (st: number, end: number, cat: number) => {
        return <>
            {
                photos.filter((el: any, ind: any) => st <= ind && ind < end).map(
                    (el: any) => {
                        return <NavLink key={el.ind}  className={s.navLink}
                                        to={routePath.DETAILS}
                                        state={{id: el.id, url: el.url, title: el.title}}>
                            <Image key={el.ind} srcSet={`${el.url}`}
                                   roundedCircle={true}
                                   width={70}
                                   onMouseEnter={() => setActive({buttonID: el.id, category: cat })}
                            />
                            { active.category === cat && active.buttonID === el.id ?
                                <NavLink className={s.navLink}
                                         to={routePath.DETAILS}
                                         state={{id: el.id, url: el.url, title: el.title}}>
                                 details
                                </NavLink>:
                                null }
                        </NavLink>
                    }
                )
            }
        </>
    }


    return (
        <div>
            {
                delay ?
                    <div>
                        <h1> loading...</h1>
                        <h1> loading...</h1>
                    </div>
                    : <div className={s.main}>
                        <div className={s.block}><h3>1 category</h3>{sorting(0, 6,1)}</div>
                        <div className={s.block}><h3>2 category</h3>{sorting(6, 12,2)}</div>
                        <div className={s.block}><h3>3 category</h3>{sorting(12, 18,3)}</div>
                        <div className={s.block}><h3>4 category</h3>{sorting(18, 24,4)}</div>
                    </div>

            }
        </div>


    );
};

export default Gallery;