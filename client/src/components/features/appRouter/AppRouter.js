import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Navbar } from '../navbar/Navbar';
import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";
import { Weather } from '../../pages/Weather';
import { Favorites } from '../../pages/Favorites';
import '../../styles/style.css';
import Sidebar from '../sidebar/Sidebar';
import { Header } from '../header/Header';
import { checkWindowWidth } from '../../utills/Index';
import { Login } from '../../pages/Login';
import { RegisterUser } from '../loginForm/RegisterUser';
import { EventsPage } from '../../pages/EventsPage';
import { EventDetails } from '../../pages/EventDetails';

export const AppRouter = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const favoriteCity = useSelector(state => state.cityReducer);
    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    }, [])
    return (
        <Router>
            <>
                <div className={checkWindowWidth(windowWidth) && "layout-container"} >
                    {checkWindowWidth(windowWidth) ? <Sidebar /> : <Navbar />}
                    {checkWindowWidth(windowWidth) && <Header />}
                </div>
                <Routes>
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/registerUser" exact element={<RegisterUser />} />
                    <Route path="/weather-app" exact element={<Weather />} />
                    <Route path="/weather-app/events" exact element={<EventsPage />} />
                    <Route path="/weather-app/favorites" exact element={<Favorites />} />
                    <Route path="/weather-app/:event" exact element={<EventDetails />} />

                </Routes>
            </>
        </Router >
    )
}
