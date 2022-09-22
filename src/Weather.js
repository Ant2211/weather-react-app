import React, { useState } from "react";
import axios from "axios";
import "./weatherstyle.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "e0011d9afadcdf29795388bf3f4d5677";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="input" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." className="input-city" onChange={updateCity} />
      <input type="Submit" value="Search" className="search" />
      <input type="Submit" value="Current" className="current" />
    </form>
  );

  if (loaded) {
    return (
      <div>
                {form}
                <div>
            <h1>{city}</h1>
        </div>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
        <div>
            <div className="row">
            <div className="col-6">
            <ul>
               <li> <h1> Kyiv </h1></li>
            <li>Temperature: 20 °C</li>
            </ul>
            </div>
            <div className="col-6">
            <ul>
                   <li>Humidity: 50 %</li>
          <li>Wind: 0 km/h</li>
          </ul>
        </div>
        </div>
        </div>
    )
    }
  
}