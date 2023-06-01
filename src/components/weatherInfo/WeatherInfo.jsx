import React, { useState, useEffect } from "react";
import "./weatherInfo.style.css";
import sun from "../../images/sun.svg";
import cloudy from "../../images/cloudy.svg";
import suncloud from "../../images/suncloud.svg";
import rain from "../../images/rain.svg";
import snow from "../../images/snow.svg";
import moon from "../../images/moon.svg";
import moonCloud from "../../images/mooncloud.svg";
import thunder from "../../images/thunder.svg";

const WeatherInfo = (props) => {
  const { city, temperature, description, feelsLike, humidity, wind, icon } =
    props;

  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    switch (icon) {
      case "01d":
        setImageSrc(sun);
        break;
      case "02d":
        setImageSrc(suncloud);
        break;
      case "03d":
        setImageSrc(cloudy);
        break;
      case "04d":
        setImageSrc(cloudy);
        break;
      case "09d":
        setImageSrc(rain);
        break;
      case "10d":
        setImageSrc(rain);
        break;
      case "11d":
        setImageSrc(thunder);
        break;
      case "13d":
        setImageSrc(snow);
        break;
      case "50d":
        setImageSrc(suncloud);
        break;
      case "01n":
        setImageSrc(moon);
        break;
      case "02n":
        setImageSrc(moonCloud);
        break;
      case "03n":
        setImageSrc(cloudy);
        break;
      case "04n":
        setImageSrc(cloudy);
        break;
      case "09n":
        setImageSrc(rain);
        break;
      case "10n":
        setImageSrc(rain);
        break;
      case "11n":
        setImageSrc(thunder);
        break;
      case "13n":
        setImageSrc(snow);
        break;
      case "50n":
        setImageSrc(moonCloud);
        break;
      default:
        setImageSrc("");
        break;
    }
  }, [icon]);

  return (
    <div className="weather-info">
      <h3>{city}</h3>
      <img src={imageSrc} alt="weather" />
      <p className="temp">{temperature}℉</p>
      <div className="description">
        <p className="description-item">{description}</p>
        <p className="description-item">Feels like: {feelsLike}℉</p>
        <p className="description-item">Humidity: {humidity} %</p>
        <p className="description-item">Wind: {wind} mph</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
