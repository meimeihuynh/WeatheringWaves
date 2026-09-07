
import { getWeather } from './weatherapi.js';
import { useEffect, useState } from 'react';
import Arrow from './components/arrow.jsx';
import VideoBackground from './components/video.jsx';



function App() {
  const [weatherData, setWeatherData] = useState(null);
  const location = "Test location";
  const details = weatherData?.properties?.timeseries[0]?.data?.instant?.details;

  useEffect(() => {
    getWeather().then(data => {
      setWeatherData(data);
    });
}, []);



  return (
  

    <main className="app-shell">
      <VideoBackground />
      <div className="content">
      <p className="eyebrow">Live conditions</p>
      <h1>WeatheringWaves</h1>
        <h1 className="undertext">Check your weather</h1>
  
        <div className="location-box">
          <h2>{location}</h2>

        {weatherData ? (
        <>
          <p>Temperature:{" "}
          {details?.air_temperature}
          °C
          </p> 

          <p> Humidity:{" "}
          {details?.relative_humidity}
          %
          </p>

          <p>
          Wind speed:{" "}
          {details?.wind_speed}
          m/s
          </p>

          <p>
          Wind direction:{" "}
          {details?.wind_from_direction}
          °
          <Arrow direction={(details?.wind_from_direction + 180) % 360} />
          </p>

        </>
        ) : (
          <p>loading weather...</p>) 
        }
        </div>
        </div>
    </main>
  );
}

export default App
