import React from 'react';
import Card from './Card';

function Weather(props){
console.log("Prop" , props);
return(
    <>
        <Card date={props.data.dt} day={props.data.temp.day} fell={props.data.feels_like.day} 
        description={props.data.weather[0].description} icon={props.data.weather[0].icon} min={props.data.temp.min} max={props.data.temp.max}>
        </Card>
    </>
)

}

export default Weather;