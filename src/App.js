import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const sampleWeather = {
    name: "Toronto",
    sys: { country: "CA" },
    main: {
      temp: 8.5,
      feels_like: 6.3,
      temp_min: 7,
      temp_max: 10,
      humidity: 62,
      pressure: 1014,
    },
    weather: [
      {
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    wind: { speed: 4.1 },
  };

  return (
    <div className="app">
      <h1>WeatherCard Test</h1>
      {}
      <WeatherCard weather={sampleWeather} units="metric" />
    </div>
  );
}

export default App;