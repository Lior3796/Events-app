import React from 'react'
import '../../styles/style.css';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_FAVORITE } from '../../../redux/actions/types';
import { ifUserRegistered } from '../../utills/Index';

export const AddButton = ({ id }) => {
    const dispatch = useDispatch();

    const addFavoriteCity = () => {
        const user = ifUserRegistered();
        dispatch({ type: ADD_FAVORITE, payload: { user, id } });
    }
    return (
        <div>
            <IconButton onClick={() => addFavoriteCity()} color="primary" aria-label="add to shopping cart">
                <FavoriteIcon fontSize="large" />
            </IconButton>
        </div>

    );
}
