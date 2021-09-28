import React from "react";
import { FlexWrapper, Svg } from "components";

const WeatherInfo = ({ currentWeather }: any) => {
  return (
    <>
      <FlexWrapper>
        <Svg src={currentWeather.conditionCode} />
        {Math.round(currentWeather.airTemperature)}
      </FlexWrapper>
      <p>Now it's {currentWeather.conditionCode}</p>
      <FlexWrapper flexDirection="column">
        <FlexWrapper>
          <Svg src="wind_speed" />
          {currentWeather.windSpeed}
        </FlexWrapper>
        <FlexWrapper>
          <Svg src="wind_gust" />
          {currentWeather.windGust}
        </FlexWrapper>
        <FlexWrapper>
          <Svg src="wind_direction" />
          {currentWeather.windDirection}
        </FlexWrapper>
        <FlexWrapper>
          <Svg src="cloud_cover" />
          {currentWeather.cloudCover}
        </FlexWrapper>
        <FlexWrapper>
          <Svg src="sea_level_pressure" />
          {currentWeather.seaLevelPressure}
        </FlexWrapper>
        <FlexWrapper>
          <Svg src="total_precitipation" />
          {currentWeather.totalPrecipitation}
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};

export default WeatherInfo;
