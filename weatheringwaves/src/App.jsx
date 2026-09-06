
import { getWeather } from './weatherapi.js';
import { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const location = "Test location";

  useEffect(() => {
    getWeather().then(data => {
      setWeatherData(data);
    });
}, []);



  return (

    <div>
        <h1>WeatheringWaves</h1>
        <h2>{location}</h2>

      {weatherData ? (
      <>
         <p>Temperature:{" "}
        {weatherData.properties.timeseries[0].data.instant.details.air_temperature}
        °C
        </p> 

        <p> Humidity:{" "}
        {weatherData.properties.timeseries[0].data.instant.details.relative_humidity}
        %
        </p>

        <p>
        Wind speed:{" "}
        {weatherData.properties.timeseries[0].data.instant.details.wind_speed}
        m/s
        </p>

        <p>
        Wind direction:{" "}
        {weatherData.properties.timeseries[0].data.instant.details.wind_from_direction}
        °
        </p>

      </>
      ) : (
        <p>loading weather...</p>)
      }
    </div>
  );
}

export default App
