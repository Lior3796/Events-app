import React from 'react'
import { Events } from '../events/Events';
import { Cover } from '../features/cover/Cover';
import { Banner } from '../features/banner/Banner';
import { Footer } from '../features/footer/Footer';
export const EventsPage = () => {
    return (
        <div className="events-page-container" >
            <Cover />
            <Banner />
            <Events />
            <Footer />
        </div>
    )
}
