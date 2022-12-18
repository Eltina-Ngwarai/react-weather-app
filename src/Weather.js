import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData]=useState({ready:false});

  function handleResponse(response){
console.log(response);

    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: "Monday 13:00",
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      city: response.data.city,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    });
  }
  if (weatherData.ready) {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"  />
          </div>
        </div>
      </form>
      
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left temperatureContainer">
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            
            <li>Humidity: {weatherData.humidity}</li>
            <li>Wind: {Math.round (weatherData.wind)} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );

} else {
  const apiKey ="45d862b440fa3dtc36ab8b0be0f20o60";
  let apiUrl= `https://api.shecodes.io/weather/v1/current?query=Hamburg&key=45d862b440fa3dtc36ab8b0be0f20o60&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return "Loading..."
}
}