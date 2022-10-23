import React, {useState, useEffect} from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./weatherstyle.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

function handleResponse(response) {
setForecast(response.data.daily);
setLoaded(true);

}
if (loaded) {
    return (
        <div className="WeahterForecast">
            <div className="row">
                <div className="col-2">
                    <ForecastDay data={forecast[1]} />
                </div>
                <div className="col-2">
                    <ForecastDay data={forecast[2]} />
                </div>
                <div className="col-2">
                    <ForecastDay data={forecast[3]} />
                </div>
                <div className="col-2">
                    <ForecastDay data={forecast[4]} />
                </div>
                <div className="col-2">
                    <ForecastDay data={forecast[5]} />
                </div>
                <div className="col-2">
                    <ForecastDay data={forecast[6]} />
                </div>
                </div>
        </div>
            );   
}else{
    let apiKey="e0011d9afadcdf29795388bf3f4d5677";
    let lat=props.coordinates.lat;
    let lon=props.coordinates.lon;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
   
}
}