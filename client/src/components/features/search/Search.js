import { useState, useEffect } from 'react';
import '../../styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { isValidValue } from '../../utills/Index';
import { DropDown } from '../dropdown/Dropdown';
import { SearchCards } from '../searchCards/SearchCards';
import { getEvents, getEventByAttraction, getClassifactionId } from '../../service/service';
import { PaginationPage } from '../pagination/PaginationPage';
import { DatePicker } from '../datePicker/DatePicker';


export const Search = () => {
    const [keyword, setKeyword] = useState("");
    const [mapEvents, setMapEvents] = useState([]);
    const [page, setPage] = useState(0);
    const [type, setType] = useState("music");
    const searchInputHandler = (e) => {
        const value = isValidValue(e);
        setKeyword(value);
    }
    const getAttractions = async () => {
        try {
            // get getClassifaction for knowing the event type
            let getClassifaction = await getClassifactionId(type);
            getClassifaction = getClassifaction._embedded.classifications[0].segment.id;

            // get getClassifaction for knowing the Artist or attraction
            let attractions = await getEventByAttraction(keyword, getClassifaction);
            attractions = attractions._embedded.attractions;
            const attractionsId = attractions[0].id;

            // get available events
            let mapAttractionToEvent = await getEvents(keyword, attractionsId, page);
            mapAttractionToEvent = mapAttractionToEvent._embedded.events;
            console.log(mapAttractionToEvent);
            const result = (
                <div className="event-search-list-container" >
                    {mapAttractionToEvent?.map((item, index) => <SearchCards index={index} id={item.id} event={item} />)}
                </div>
            )
            setMapEvents(result);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(getAttractions, [page, type])


    return (
        <div className="search-container">
            <div className="search-bar">
                <DropDown setType={setType} type={type} />

                <input className="search-input" value={keyword} onChange={e => searchInputHandler(e)} type="text" />
                <input className="search-button" type="submit" value="search" onClick={() => getAttractions(keyword)} />

                <DatePicker />

            </div>
            <div className="search-cards-container">

                {
                    mapEvents || <></>

                }
                <PaginationPage setPage={setPage} />

            </div>
            <ToastContainer />
        </div>
    )
}
