import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weatherforecast.css";

export default function WeatherForecast(){
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