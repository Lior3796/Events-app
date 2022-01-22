import React, { useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { AddButton } from '../features/addButton/AddButton';
import { RemoveButton } from '../features/removeButton/RemoveButton';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export const SingleEvent = ({ event, id, index }) => {
    const cardRef = useRef();
    console.log(cardRef.current);
    return (
        <Link to={`/weather-app/${event.name}`}>

            <Card className={`event-${index} events`} ref={cardRef} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        width="50"
                        image={event.images[2].url}
                        alt="green iguana"

                    />
                    <CardContent>

                        <Typography gutterBottom variant="h3" component="div">
                            {event.name}
                        </Typography>



                        <Typography variant="h6" color="text.primary">
                            {event.info}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div className="button-container">
                        <Stack direction="row" spacing={1}>
                            <AddButton id={id} />
                            <RemoveButton id={id} />
                        </Stack>
                    </div>
                </CardActions>
            </Card>
        </Link>


    )
}





