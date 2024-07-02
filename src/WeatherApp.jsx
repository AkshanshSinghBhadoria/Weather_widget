import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
    let [weatherInfo , setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 40,
        temp: 34.39,
        minTemp: 34.39,
        maxTemp: 34.39,
        humidity: 52,
        weather: "overcast clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
      <div style={{textAlign: "center"}}>
        <h2>Weather App By Akshansh</h2>

        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
      </div>
    );
}