import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from './Weather';
function App() {

  const [posts, setPosts] = useState([]);
  React.useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=24.860966&lon=66.990501&appid=8f58e3a0fb181c1d0884224f8a72eff2&units=metric
    `)
      .then(res => {

        console.log(res.data.daily)
        //const newPost = res.data.daily;
        const newPost = res.data.daily;
        setPosts(newPost);

      });
  }, []);
  return (
    <div className="App">
      {
        (posts && posts.length > 0)
          ?
          (
            posts.map((item, index) => {
              return (
                <>
                <Weather data={item}/>
                  {/* <h1>Temp : {item.temp.day} Feels Like : {item.feels_like.day} Description : {item.weather[0].description} </h1> */}
                </>
              );
            })
          )
          :
          (<h1> Data Not Found! </h1>)
      }
    </div>
  );
}

export default App;