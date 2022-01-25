import React, { useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { createStyles } from '@mui/material';
import { Stack } from '@mui/material';
import { AddButton } from '../features/addButton/AddButton';
import { RemoveButton } from '../features/removeButton/RemoveButton';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export const SingleEvent = ({ event, id, index }) => {
    const cardRef = useRef();
    console.log(cardRef.current);

    const styles = () =>
        createStyles({
            cardImg: {
                '&::before': {
                    content: 'dsadsdsads',
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    position: "absolute",

                }
            }
        });

    return (
        <Link to={`/weather-app/${event.name}`}>

            <Card className={`event-${index} events`} ref={cardRef} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        width="50"
                        image={event.images[5].url}
                        alt="green iguana"

                    />
                </CardActionArea>
            </Card>
        </Link>


    )
}





