
import { getWeather } from './weatherapi.js';
import { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather().then(data => {
      setWeatherData(data);
    });
}, []);



  return (

    <div>
        <h1>WeatheringWaves</h1>
 
      {weatherData ? (
        <p>Temperature:{" "}
        {weatherData.properties.timeseries[0].data.instant.details.air_temperature}
        °C
        </p> 
      ) : (
        <p>loading weather...</p>)
      }
    </div>
  );
}

export default App
