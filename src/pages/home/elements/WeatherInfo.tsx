import React from "react";
import WeatherInfoWithData from "./WeatherInfoWithData";

const WeatherInfo = ({ currentWeather, isNow }: any) => {
  return (
    <>
      <WeatherInfoWithData currentWeather={currentWeather} isNow={isNow} />
    </>
  );
};

export default WeatherInfo;
