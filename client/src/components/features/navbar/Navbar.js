import React, { useEffect, useState } from 'react'
import '../../styles/style.css';
import { Link } from 'react-router-dom';
import { ifUserRegistered } from "../../utills/Index";

export const Navbar = () => {
    const [token, setToken] = useState(document.cookie);

    useEffect(() => {
        if (token) {
            const userResult = ifUserRegistered();
            setToken(userResult);
        }
    }, [token])
    return (
        <nav className="navbar-container">
            <h1 style={{ width: "fit-content", color: 'black' }}>{`Hello ${token || ''}` || "Lior app"}</h1>

            <ul className="navbar-ul">

                <li className="navbar-li">
                    <Link className="navbar-link" to="/weather-app"> Weather </Link>
                </li>
                <li className="navbar-li">
                    <Link className="navbar-link" to="/weather-app/favorites"> Favorites </Link>
                </li>
                <li className="navbar-li">
                    <Link className="navbar-link" to="/weather-app/Events"> Events </Link>
                </li>
            </ul>

        </nav>
    )
}
