import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';

export const Link = ({ pathname, text }) => {
    const navigate = useNavigate();

    return (
        <ListItem button onClick={() => navigate({ pathname })}>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={text}></ListItemText>
        </ListItem>
    )
}
