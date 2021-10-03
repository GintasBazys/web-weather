import React from "react";
import WeatherInfoWithData from "./WeatherInfoWithData";

const WeatherInfo = ({ currentWeather }: any) => {
  return (
    <>
      <WeatherInfoWithData currentWeather={currentWeather} />
    </>
  );
};

export default WeatherInfo;
