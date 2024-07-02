import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "58f1cd29ba3052dcd22f2915027d4bf2";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            minTemp: jsonResponse.main.temp_min,
            maxTemp: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }

    return (
      <div className='SearchBox'>
        <h3>Search for weather!</h3>
        <form onSubmit={handleSubmit}>
          <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange}/>
          <br></br><br></br>
          <Button variant="contained" type="submit">
          Search
          </Button>
        </form>
      </div>
    );
}