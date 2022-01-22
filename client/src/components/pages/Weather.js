import React, { useEffect } from 'react';
import '../styles/style.css';
import { useDispatch } from 'react-redux';
import { Search } from '../features/search/Search';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Weather = () => {
    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    return (
        <div className="weather-container">
            <Search />
        </div>
    )
}
