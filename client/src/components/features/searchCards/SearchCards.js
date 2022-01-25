import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export const SearchCards = ({ event }) => {
    return (
        <>
            <List sx={{ width: "100%" }}>
                <ListItem sx={{ width: "100%" }}>
                    <ListItemText
                        color="white"
                        primary="Attraction"
                        secondary={
                            <>
                                <Typography
                                    sx={{ display: 'inline', fontSize: "1.6rem" }}
                                    component="h3"
                                    variant="div"
                                    color="white"
                                >
                                    {event?.name}

                                </Typography>
                                <Typography
                                    sx={{ fontSize: "1.6rem" }}
                                    component="h6"
                                    variant="p"
                                    color="white"
                                >
                                    {event?.dates.start.localDate}

                                </Typography>
                                <Typography
                                    sx={{ fontSize: "1.3rem" }}
                                    component="h6"
                                    variant="p"
                                    color="white"
                                >
                                    {event?.dates.start.localTime}

                                </Typography>

                            </>
                        }
                    />
                    <ListItemAvatar >
                        <Avatar sx={{ width: "70px", height: "70px" }} alt="Remy Sharp" src={event.images[5].url} />
                    </ListItemAvatar>
                </ListItem>
            </List >
            <Divider />
        </>
    );
}
