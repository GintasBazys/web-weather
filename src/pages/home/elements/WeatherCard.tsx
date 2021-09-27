import { FlexWrapper, Svg } from "components";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const WeatherCard = () => {
  const [currentWeather, setCurrentWeather] = useState<any>({});

  useEffect(() => {
    axios
      .post("http://www.localhost:3000/weather", {
        location: "vilnius",
      })
      .then((r) => {
        setCurrentWeather(r.data.weather_data.forecastTimestamps[0]);
      });
  }, []);

  return (
    <FlexWrapper>
      <CardContainer>
        <input type="text" />
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
      </CardContainer>
    </FlexWrapper>
  );
};

export default WeatherCard;

const CardContainer = styled.div`
  height: 654px;
  background: #5fa6f1 0% 0% no-repeat padding-box;
  width: 374px;
  border-radius: 16px;
  margin: 31px 44px 0;
`;
