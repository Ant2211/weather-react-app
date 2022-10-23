import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import WeatherForecast from "./WeatherForecast.js";
import "bootstrap/dist/css/bootstrap.css";
import "./weatherstyle.css";

export default function Weather(props) {
    const [city,setCity] = useState(props.defaultCity);  
  const [weather, setWeather] = useState({loaded:false});
  

  function displayWeather(response) {
        setWeather({
            loaded: true,
            date: new Date(response.data.dt * 1000),
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }
  function search() {
    let apiKey = "e0011d9afadcdf29795388bf3f4d5677";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="input" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." className="input-city" autofocus="on" onChange={updateCity} />
      <input type="Submit" value="Search" className="search" />
      </form>
  );

  if (weather.loaded) {
    return (
      <div>
         
                {form}
                <div className="container">
                <div className = "row">
                <div className = "col-6">
            <ul>
<li><h1 className="text-capitalize">{weather.city}</h1></li>
<li> <FormattedDate date={weather.date}/> </li>
         <li> <span> <img src={weather.icon} alt={weather.description} className="icon"/> </span>
         <span className="temp">{Math.round(weather.temperature)}</span>
      <span className="units">°C </span> </li>
     </ul>
        </div>
        <div className = "col-6">
        <ul className="description-weather">
          <li>{weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          
        </ul>
        </div>
        </div>
        </div>
        <div className="my-5">
        <WeatherForecast coordinates={weather.coordinates} icon={weather.icon} description={weather.description} />
      </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
    }
  
}