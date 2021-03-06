export const getCoordinates = (Key) => {
    return fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?apikey=${process.env.REACT_APP_THIRD_KEY}`)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
// https://app.ticketmaster.com/discovery/v2/events?apikey=iC4amkhAqGNtW5dAuGGYS0lwGTb0y8SY&keyword=The%20weekend&locale=*&page=2
export const getEvents = (keyword, attractionId, page) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=iC4amkhAqGNtW5dAuGGYS0lwGTb0y8SY&keyword=${keyword}&attractionId=${attractionId || "*"}&locale=*&page=${page || "0"}&size=7`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const getEventByAttraction = (keyword, startDateTime, endDateTime, classifactionId) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/attractions?apikey=9Fe3TiZMSanrQ1TnmPuhrc7bW0q6if13&keyword=${keyword}&locale=*&size=9&preferredCountry=us&
    startDateTime=${startDateTime || "*"}&endDateTime=${endDateTime || ""}${classifactionId ? `&classifactionId=${classifactionId}` : ""}`)
        .then(attraction => attraction.json())
        .catch(err => console.log(err))
}

export const getClassifactionId = (keyword, classificationId) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/classifications?apikey=iC4amkhAqGNtW5dAuGGYS0lwGTb0y8SY&keyword=${keyword}&locale=*`)
        .then(attraction => attraction.json())
        .catch(err => console.log(err))
}

export const getUserEvents = (userName) => {
    return fetch(`http://localhost:5000/user/getUserEvents/:${userName}`)
        .then(events => events.json())
        .then(events => console.log(events))
        .catch(err => console.log(err))
}

export const addUserFavoriteEvent = (user) => {
    console.log(user);
    return fetch(`http://localhost:5000/user/userEvents/addKeyToUser`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(user) // Send keys to DB for arrays
    })
        .then(attraction => attraction.json())
        .then(result => console.log(result))
        .catch(err => console.log(err))
}

export const deleteUserFavoriteEvent = (user) => {
    return fetch(`http://localhost:5000/user/userEvents/deleteKeyFromUser`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(user) // Send keys to DB for arrays
    })
        .then(attraction => attraction.json())
        .then(result => console.log(result))
        .catch(err => console.log(err))
}


