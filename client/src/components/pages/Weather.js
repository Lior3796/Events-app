import { useState, useEffect } from 'react';
import '../styles/style.css';
import { useDispatch } from 'react-redux';
import { Search } from '../features/search/Search';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../features/sidebar/Sidebar';
export const Weather = () => {



    return (
        <div className="search-page-container">
            <Sidebar />
            <Search />

        </div>
    )
}
