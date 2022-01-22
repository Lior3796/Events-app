import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventByAttraction } from '../service/service';
import { Route, Routes, NavLink } from 'react-router-dom';
import "../styles/style.css"
export const EventDetails = () => {
    const params = useParams();
    const [url, setUrl] = useState("");
    const [chosenEvent, setChosenEvent] = useState({});

    useEffect(async () => {
        const event = await getEventByAttraction(params.event);
        setChosenEvent(event._embedded.attractions);
        const urlEvent = chosenEvent[0]?.url || "https://www.ticketmaster.ie/";
        setUrl(urlEvent);

    }, [])

    return (
        <div className="event-details-container">
            <div className="event-image-container">
                <img className="event-image" src={chosenEvent[0]?.images[1].url} />
            </div>
            <div className="event-descripition">
                <h1 className="event-header">{chosenEvent[0]?.name}</h1>
                <p className="event-info">fsafsafsasa</p>
                <div className="event-links">
                    <a href=""><i class="fab fa-facebook"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-youtube"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                </div>
                <a href={url}><input value="click here" className="cover-btn" type="button" /> </a>
            </div>
        </div>
    )
}
