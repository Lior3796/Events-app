import React from 'react'
import '../../styles/style.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { ifUserRegistered } from '../../utills/Index';

import { DELETE_FAVORITE } from '../../../redux/actions/types';

export const RemoveButton = ({ id }) => {
    const dispatch = useDispatch();

    const deleteFavoriteCity = () => {
        const user = ifUserRegistered();
        dispatch({ type: DELETE_FAVORITE, payload: { user, id } })
    }

    return (
        <IconButton onClick={() => deleteFavoriteCity()} color="primary" aria-label="remove to shopping cart">
            <DeleteIcon fontSize='large' />
        </IconButton>
    );
}
