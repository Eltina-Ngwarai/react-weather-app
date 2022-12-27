import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weatherforecast.css";
import axios from "axios";


export default function WeatherForecast(props){
    function handleResponse(response){

    }
    let apiKey = "c5f0e59acac64258bb92ed027d20c68f";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse)
    return (
        <div className="WeatherForecast">
            <div className="col">
                <div className="WeatherForecastDay">
                    Thu
                </div>
                <WeatherIcon code="01d" size={36}/>
                <div className="WeatherForecast-temperature">
                    <span className="WeatherForecast-temperature-max">19°C</span>

                    <span className="WeatherForecast-temperature-min">10°C</span>
                </div>
            </div>
        </div>
    )
}