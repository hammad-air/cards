import React from 'react';
// import weather_image from './weather.gif';
import './App.css';

function toDateTime(secs) {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t;
}

function Card(props){
  const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
  }

let dt = toDateTime(props.date);
return(
    <>
      <div className='card'>
          <div className='card-header'>
            {/* <img className='img' src={weather_image} />      */}
            {/* <img className='icon' src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} /> */}
            <h6 className='date'>{dt.getDate()}-{months[dt.getMonth()]}-{dt.getFullYear()} </h6>       
            <h6 className='temp'>{props.day} <small>&#8451;</small></h6>
          </div>
          <div className='card-body'>
              <h6 className='mix'>Min : {props.min} Max : {props.max}</h6> 
              <h6 className='fell'>Feel : {props.fell}</h6> 
              <h6 className='desc'>Description : {props.description}</h6>
          </div>
      </div>
    </>
)
}

export default Card;