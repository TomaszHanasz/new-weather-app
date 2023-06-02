import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import WeatherInfo from "../../components/weatherInfo/WeatherInfo";
import { getTodaysDay } from "../../utils/helperFunctions";
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
  const [todaysDate, setTodaysDate] = useState(new Date());

  useEffect(() => {
    getSearchedCity(); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const clock = setInterval(() => {
      setTodaysDate(new Date());
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  const onChangeHandler = (e) => {
    setSearchedCity(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      getSearchedCity();
    }
  };

  const getSearchedCity = async () => {
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
      setTodaysDate(new Date());
      console.log(getTodaysDay());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="weather-app-container">
      {city && (
        <>
          <WeatherInfo
            city={city}
            humidity={humidity}
            description={description}
            feelsLike={feelsLike}
            wind={wind}
            temperature={temperature}
            icon={icon}
          />
          <p>{todaysDate.toLocaleTimeString()}</p>
          <p>{todaysDate.toLocaleDateString()}</p>
          <p>Have a good {getTodaysDay()}!</p>
        </>
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
        onClick={getSearchedCity}
        style={{ borderRadius: "0" }}
      >
        Get weather
      </Button>
      <p>Copyrights Tomasz Hanasz {todaysDate.getFullYear()}</p>
    </div>
  );
};

export default WeatherApp;
