export const City = ({ city }) => {
  return (
    <div className={city.name ? "info-weather" : ""}>
      <div className="info-top">
        <div style={{ position: "relative" }}>
          {city.main ? <h1>{city.main.temp.toFixed(0)}&deg;C</h1> : null}
          {city.weather ? (
            <img
              src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />
          ) : null}
        </div>
        <div>
          <h2>{city.name}</h2>
          {city.weather ? <h4>{city.weather[0].description}</h4> : null}
        </div>
      </div>
      <div className="info-footer">
        {city.main ? (
          <h3>
            Hissedilen: {city.main.feels_like.toFixed(0)}
            &deg;C
          </h3>
        ) : null}
        {city.main ? <h3>Rüzgar: {city.wind.speed} m/s</h3> : null}
        {city.main ? <h3>Nem: {city.main.humidity}%</h3> : null}
      </div>
    </div>
  );
};
