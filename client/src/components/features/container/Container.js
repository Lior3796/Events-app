import React, { useEffect } from 'react'
import '../../styles/style.css';
import { AppRouter } from '../appRouter/AppRouter';
import { useSelector, useDispatch } from 'react-redux';

export const Container = () => {

    return (
        <div className="light">
            <AppRouter />
        </div>
    )
}
