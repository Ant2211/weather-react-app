import React from "react";
import "./weatherstyle.css";

export default function ForecastDay(props) {
    let forecastIcon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
return days[day];
    }
    return(
        <div>
        <div className="forecastDay text-center"> {day()} </div>
                <div> <img src={forecastIcon} alt="" className="icon-forecast d-fluid"/>  </div>
                 <div className="text-center"> <span className="temp-max"> {Math.round(props.data.temp.max)}°</span> <span className="temp-min"> {Math.round(props.data.temp.min)}°</span> </div>
                </div>
    );
}