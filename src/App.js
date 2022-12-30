import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Harare" />
        <footer>Coded by Eltina Ngwarai and is{" "}
          <a
            href="https://github.com/elty-annie/vanilla-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github{" "}
          </a> 
          and hosted on <a href="https://app.netlify.com/teams/elty-annie/overview" target="_blank" rel="noreferrer">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
