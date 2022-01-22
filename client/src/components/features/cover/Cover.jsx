import React, { useState } from "react";
import "../../styles/style.css";
import { CoverText } from "../coverText/CoverText";

export const Cover = () => {
	return (
		<div className="cover-container">
			<CoverText
				coverHeader="Your Next Events Starts Here"
				coverParagraph="Choose your music festival, concert or any event right now!"
			/>
			<div className="cover-img-container">
				<div className="cover-img-block"></div>
			</div>
		</div>
	);
};
