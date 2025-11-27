import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

const API_KEY = "e4e1990b3ff94fc2ab5ead72645f9f21";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [units, setUnits] = useState("metric"); 

  useEffect(() => {
    fetchWeather("Toronto");
  }, []);


  const fetchWeather = async (cityName) => {
    if (!cityName) return;

    try {
      setLoading(true)
      setError("")

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${units}`
      )

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setWeather(null)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    if (weather) { fetchWeather(weather.name) }
  }, [units])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(query.trim())
  };

  return (
    <div className="app">
      <div className="background-layer" />
      <header className="app-header">
        <h1>
          Weather Forecast
        </h1>
        <p className="subtitle">Search any city.</p>
      </header>

      <div className="unit-toggle">
        <button className={units === "metric" ? "active" : ""}
          onClick={() => setUnits("metric")}>°C</button>
        <button className={units === "imperial" ? "active" : ""}
          onClick={() => setUnits("imperial")}>°F</button>
      </div>

      <main className="content">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter city name"
            value={query} onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <StatusMessage loading={loading} error={error} />
        <WeatherCard weather={weather} units={units} />
      </main>
    </div>
  );
}

export default App;

function StatusMessage({ loading, error }) {
  if (loading) {
    return <div>Fetching city data…</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return null;
}