import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import WeatherInfo from "../../components/weatherInfo/WeatherInfo";
import "./weatherApp.style.css";

const WeatherApp = () => {
  const lastCity = localStorage.getItem("Storage");
  const [temperature, setTemperature] = useState(0);
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");
  const [feelsLike, setFeelsLike] = useState(0);
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [searchedCity, setSearchedCity] = useState(lastCity);

  const onChangeHandler = (e) => {
    setSearchedCity(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      onClickHandler();
    }
  };

  const onClickHandler = async () => {
    try {
      localStorage.setItem("Storage", searchedCity);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=imperial&appid=355cf3bff397cfe55bf144d10da9b2d8`
      );
      const { data } = response;
      setCity(data.name);
      setTemperature(data.main.temp.toFixed(0));
      setFeelsLike(data.main.feels_like.toFixed(0));
      setDescription(data.weather[0].description);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setIcon(data.weather[0].icon);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="weather-app-container">
      {city && (
        <WeatherInfo
          city={city}
          humidity={humidity}
          description={description}
          feelsLike={feelsLike}
          wind={wind}
          temperature={temperature}
          icon={icon}
        />
      )}

      <TextField
        id="filled-basic"
        label="Enter city name"
        variant="filled"
        onChange={onChangeHandler}
        value={searchedCity}
        onKeyDown={onKeyDownHandler}
        style={{ backgroundColor: "white" }}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={onClickHandler}
        style={{ borderRadius: "0" }}
      >
        Get weather
      </Button>
    </div>
  );
};

export default WeatherApp;
