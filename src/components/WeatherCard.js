export default function WeatherCard({ weather }){
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
                <h1 className="temp">{Math.round(main.temp)}°C</h1>
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
                        {Math.round(main.feels_like)}°C
                        </div>
                    </div>
                    <div className="detail">
                        <div className="detail-label">Humidity</div>
                        <div className="detail-value">{main.humidity}%</div>
                    </div>
                    <div className="detail">
                        <div className="detail-label">Wind</div>
                        <div className="detail-value">{wind.speed} m/s</div>
                    </div>
                    <div className="detail">
                        <div className="detail-label">Pressure</div>
                        <div className="detail-value">{main.pressure} hPa</div>
                    </div>
                    <div className="detail">
                        <div className="detail-label">Min / Max</div>
                        <div className="detail-value">
                        {Math.round(main.temp_min)}° / {Math.round(main.temp_max)}°
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}