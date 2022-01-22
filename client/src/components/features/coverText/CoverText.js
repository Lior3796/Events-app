import React from 'react'

export const CoverText = ({ coverHeader, coverParagraph }) => {
    return (
        <div className="cover-text-container">
            <h1 className="cover-header">{coverHeader}</h1>
            <p className="cover-paragraph">
                {coverParagraph}
            </p>
            <div>
                <input value="click here" className="cover-btn" type="button" />
            </div>
        </div>
        //Your Next Events Starts Here          
        // Choose your music festival, concert or any event right now!
    )
}
