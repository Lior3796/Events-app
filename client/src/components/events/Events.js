import React, { useState, useEffect } from 'react'
import '../styles/style.css';
import { useSelector } from 'react-redux';
import { getEventByAttraction } from '../service/service';
import { SingleEvent } from '../singleEvent.js/SingleEvent';

export const Events = () => {
    const [events, setEvents] = useState([]);
    const [info, setInfo] = useState("");


    const showEvent = async () => {
        const result = await getEventByAttraction("pop");
        setEvents(result._embedded.attractions);
    }

    const eventList = events?.map((item, index) => <SingleEvent index={index} id={item.id} event={item} />);

    useEffect(showEvent, []);

    return (
        <div className="event-page-list-container" >
            {
                eventList
            }
        </div>

    )
}
