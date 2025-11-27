export default function WeatherCard({ weather, units }){
    if (!weather){
        return(
            <div>
                <p>Search for a city to see the weather.</p>
            </div>
        )
    }

    const {name,sys,main,weather: weatherArray,wind} = weather;
    const condition = weatherArray[0];

    const iconUrl = `https://openweathermap.org/img/wn/${condition.icon}@2x.png`;

    return (
        <div className="card weather-card">
            <div className="card-left">
                <p className="day-label">Today</p>
                <h1 className="temp">{Math.round(main.temp)}°{units === "metric" ? "C" : "F"}</h1>
                <p className="condition-text">{condition.description}</p>
                <p className="location-text">
                {name}, {sys.country}
                </p>
            </div>

            <div className="card-right">
                <img src={iconUrl} alt={condition.main} className="weather-icon" />
                <div className="details-grid">
                    <div className="detail">
                        <div className="detail-label">Feels like</div>
                        <div className="detail-value">
                            {Math.round(main.feels_like)}°{units === "metric" ? "C" : "F"}
                        </div>
                    </div>
                    <div className="detail">
                        <div className="detail-label">Humidity</div>
                        <div className="detail-value">{main.humidity}%</div>
                    </div>
                    <div className="detail">
                        <div className="detail-label">Wind</div>
                        <div className="detail-value">{wind.speed} {units === "metric" ? "m/s" : "mph"}
                    </div>
                    <div className="detail">
                        <div className="detail-label">Pressure</div>
                        <div className="detail-value">{main.pressure} hPa</div>
                    </div>
                    <div className="detail">
                        <div className="detail-label">Min / Max</div>
                            <div className="detail-value">
                                {Math.round(main.temp_min)}°{units === "metric" ? "C" : "F"} /
                                {Math.round(main.temp_max)}°{units === "metric" ? "C" : "F"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}