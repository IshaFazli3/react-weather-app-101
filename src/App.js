import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Seattle" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/isha-f-28b060252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Isha Fazli
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/IshaFazli3/react-weather-app-101/blob/main/src/App.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://taupe-tulumba-be4a27.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}