import React, { useState, useEffect } from 'react'
import '../styles/style.css';
import { useSelector } from 'react-redux';
import { getEventByAttraction } from '../service/service';
import { SingleEvent } from '../singleEvent.js/SingleEvent';

export const Events = () => {
    const [events, setEvents] = useState([]);
    const [info, setInfo] = useState("");


    const showEvent = async () => {
        try {
            const result = await getEventByAttraction("Lil ", "", "", "KZFzniwnSyZfZ7v7nJ");
            setEvents(result._embedded.attractions);
            console.log(events);


        } catch (e) {
            console.log(e);
        }
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
