import React, { useState } from 'react';
import { SliderCards } from '../sliderCards/SliderCards';
import { CoverText } from '../coverText/CoverText';
import "../../styles/style.css";
export const Banner = () => {
    const info = [{ title: "dsasd", descripition: "dsadsa" }, { title: "dsasd", descripition: "dsadsa" }, { title: "dsasd", descripition: "dsadsa" }];
    const [changeDir, setChangeDir] = useState(0);

    const mapCardsEvent = info.map((item, key) => <SliderCards key={key} slideDirection={{ changeDir, setChangeDir }} item={item} />)




    return (
        <div style={{ overflow: "hidden", display: "flex", border: "1px solid black", maxHeight: "400px", background: "white" }}>
            <CoverText coverHeader="Here is the last events" coverParagraph="Just click and see all your favorite artists" />
            <div className="cards-container" >
                {
                    mapCardsEvent
                }
            </div>
        </div>
    )
}
