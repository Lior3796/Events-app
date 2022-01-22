import React from 'react';
import "../../styles/style.css";
import { motion } from "framer-motion";
export const SliderCards = ({ item }) => {

    return (

        <div className="img-container">
            <div className="card-content-1">
                <h1 className="card-header">{item.title}</h1>
                <p className="card-descripition">
                    {item.descripition}
                </p>
            </div>

        </div>

    )
}
