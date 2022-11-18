import React from "react";
import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    temperature: 21,
    date: "Sunday 23:13",
    description: "Cloudy",
    humidity: 45,
    wind: 10
  };
  return (
    <div className="Weather">
      <div className="card text-center">
        <div className="card-body">
          <form id="search-form">
            <div className="mb-3">
              <div className="row">
                <div className="col-8">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter a city"
                    autocomplete="off"
                    autofocus="on"
                    id="search-text-city"
                  />
                </div>
                <div className="col-2">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Search"
                  />
                </div>
                <div className="col-2">
                  <input
                    className="btn btn-success"
                    type="button"
                    value="Current"
                    id="current-location"
                  />
                </div>
              </div>
            </div>
          </form>

          <div className="row citynamesmall">
            <div className="col">Tokyo</div>
            <div className="col">Lisbon</div>
            <div className="col">Paris</div>
            <div className="col">Sydney</div>
            <div className="col-4">San Francisco</div>
          </div>
        </div>
        <br />

        <h1 className="cityname" id="bigCityname">
          {weatherData.city}
        </h1>
        <p>
          <div id="dayAndTime">{weatherData.date}</div>
          <span id="weatherDes">{weatherData.description}</span>
        </p>
        <p className="weatherUI">⛅</p>
        <h2>
          <span id="currentTem">21</span>°C
        </h2>
        <p>
          Humidity: <span id="humidityW">{weatherData.humidity}</span> %
          <br />
          Wind: <span id="windS">{weatherData.wind}</span> km/h
        </p>
        <br />

        <div className="row week">
          <div className="col">Mon</div>
          <div className="col">Tue</div>
          <div className="col">Wed</div>
          <div className="col">Thu</div>
          <div className="col">Fri</div>
        </div>

        <div className="row weatherUI">
          <div className="col">☀️</div>
          <div className="col">☀️</div>
          <div className="col">☀️</div>
          <div className="col">☀️</div>
          <div className="col">☀️</div>
        </div>

        <div className="row tem">
          <div className="col">20°C</div>
          <div className="col">18°C</div>
          <div className="col">19°C</div>
          <div className="col">22°C</div>
          <div className="col">25°C</div>
        </div>
      </div>
    </div>
  );
}