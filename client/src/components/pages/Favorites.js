import React, { useEffect, useState, useMemo } from 'react';
import '../styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { GET_FAVORITE } from '../../redux/actions/types';
import { useSelector } from 'react-redux';
import { FavoriteCard } from '../features/favoriteCard/FavoriteCard';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import SimpleImageSlider from "react-simple-image-slider";
export const Favorites = () => {
    const favoriteEvents = useSelector(state => state.favoriteReducer);
    const [favorites, setFavorites] = useState([{}]);
    const dispatch = useDispatch();
    const getEventsFromDB = () => {
        dispatch({ type: GET_FAVORITE, payload: { userName: "Liorlsa9" } });
        console.log(favoriteEvents);
    }
    useEffect(getEventsFromDB, [])

    return (
        <div className="favorite-container">
            <div className="forecasts-map-container">
                <h1 className="header">Here is your latest events:</h1>
            </div>

            {/* <div>
                <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </div> */}


            <ToastContainer />
        </div>
    )
}
