import { useState, useEffect } from 'react';
import '../../styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { isValidValue } from '../../utills/Index';
import { getEvents, getEventByAttraction } from '../../service/service';
import { SingleEvent } from '../../singleEvent.js/SingleEvent';
import { DatePicker } from '../datePicker/DatePicker';
export const Search = () => {
    const [keyword, setKeyword] = useState();
    const [mapEvents, setMapEvents] = useState([]);
    const dispatch = useDispatch();

    const searchInputHandler = (e) => {
        const value = isValidValue(e);
        setKeyword(value);
    }
    const getAttractions = async () => {
        try {
            let events = await getEventByAttraction(keyword);
            events = events._embedded.attractions;
            const mapAttractionToEvent = await getEvents(keyword, events[0].id);
            const result = (
                <div className="event-search-list-container" >
                    {events.map((item, index) => <SingleEvent index={index} id={item.id} event={item} />)}
                </div>
            )
            setMapEvents(result);

        }
        catch (e) {
            console.log(e);
        }
    }


    return (
        <div className="search-container">

            <div className="search-bar">
                <input className="search-input" value={keyword} onChange={e => searchInputHandler(e)} type="text" />
                <input className="search-button" type="submit" value="search" onClick={() => getAttractions(keyword)} />
                <DatePicker />

            </div>

            {
                mapEvents || <></>

            }

            <ToastContainer />
        </div>
    )
}
