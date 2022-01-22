import React, { useState, useEffect } from 'react';
import '../../styles/style.css';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FavoriteCard = ({ city }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [temp, setTemp] = useState();

    useEffect(() => {

    }, [])
    return (
        <Card className="favoriteCard">
            <CardContent>
                <Typography color="text.primary">
                    <Typography style={{ fontFamily: "Assistant", textAlign: "center" }} gutterBottom variant="h3" component="div">
                        {city.LocalizedName}
                    </Typography>
                </Typography>
                <Typography style={{ fontFamily: "Assistant", textAlign: "center" }} gutterBottom variant="div" component="h3">
                    <Typography style={{ fontFamily: "Assistant", textAlign: "center" }} gutterBottom variant="h3" component="div">

                    </Typography>
                    <Typography style={{ fontFamily: "Assistant", textAlign: "center" }} gutterBottom variant="h3" component="small">

                    </Typography>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large">Click here </Button>
            </CardActions>
            <ToastContainer />
        </Card>

    )
}







