import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";

import "./weatherstyle.css";

export default function App() {
    return (
        <div className = "App">
            <h3> 🌎 Global Weather </h3>
            <Weather defaultCity="Kyiv"/>
           
            <footer>
            <a href='https://github.com/Ant2211/weather-react-app' target="_blank" rel="noreferrer"> Github link</a> 
            </footer>
                   </div>
    )
}