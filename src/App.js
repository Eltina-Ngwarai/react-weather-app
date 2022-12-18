import React from "react"
import './App.css';
import axios from "axios";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
       
        <Weather defaultCity="Hamburg"/>
        <footer>
      <a
        href="https://github.com/elty-annie/vanilla-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code{" "}
      </a>{" "}
      by Eltina Ngwarai
      </footer>
      </div>
    </div>
  );
};
