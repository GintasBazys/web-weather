import React from "react";
import { FlexWrapper, GridWrapper, Image } from "components";
import styled from "styled-components";
import { TextWrapper } from "components/wrappers/TextWrapper";
import { DAYS } from "utils/times";
import { white } from "utils/colors";

const WeatherInfo = ({ currentWeather }: any) => {
  const dateAndTime = currentWeather.forecastTimeUtc.split(" ");

  const day = new Date(dateAndTime[0]).getDay();

  console.log(day);

  return (
    <>
      <TemperatureBlock>
        <FlexWrapper>
          <Image
            width="5.063rem"
            height="5.313rem"
            src={`${currentWeather.conditionCode}_white`}
          />
          <FlexWrapper margin="-1rem 0.625rem 0.625rem">
            <TextWrapper color={white} fontSize="4.313rem">
              {Math.round(currentWeather.airTemperature)}
            </TextWrapper>
            <TextWrapper color={white} fontSize="1.813rem">
              o
            </TextWrapper>
          </FlexWrapper>
        </FlexWrapper>
        <TextWrapper fontSize="1.563rem" color={white}>
          {/* Now it's {currentWeather.conditionCode} */}
          {DAYS[day]}
        </TextWrapper>
        <TextWrapper fontSize="1.563rem" color={white}>
          {dateAndTime[1].substring(0, 5)} - {currentWeather.conditionCode}
        </TextWrapper>
      </TemperatureBlock>
      <WeatherInfoBlock>
        <FlexWrapper flexDirection="column">
          <GridWrapper margin="0 0 1rem 0" columns={2}>
            <Image src="wind-speed" />
            <TextWrapper color={white} margin="0 0 0 -7.5rem">
              Wind speed: {currentWeather.windSpeed}ms
            </TextWrapper>
          </GridWrapper>
          <GridWrapper margin="0 0 1rem 0" columns={2}>
            <Image src="wind-gust" />
            <TextWrapper color={white} margin="0 0 0 -7.5rem">
              Wind gust: {currentWeather.windGust}ms
            </TextWrapper>
          </GridWrapper>
          <GridWrapper columns={2} margin="0 0 rem 0">
            <Image src="wind-direction" />
            <TextWrapper color={white} margin="0 0 0 -7.5rem">
              Wind direction: {currentWeather.windDirection}
            </TextWrapper>
          </GridWrapper>
          <GridWrapper margin="0 0 1rem 0" columns={2}>
            <Image src="cloud-cover" />
            <TextWrapper color={white} margin="0 0 0 -7.5rem">
              Cloud cover: {currentWeather.cloudCover}%
            </TextWrapper>
          </GridWrapper>
          <GridWrapper margin="0 0 1rem 0px" columns={2}>
            <Image src="sea-level-pressure" />
            <TextWrapper color={white} margin="0 0 0 -7.5rem">
              Sea level pressure: {currentWeather.seaLevelPressure}
            </TextWrapper>
          </GridWrapper>
          <GridWrapper margin="0 0 1rem 0px" columns={2}>
            <Image src="total-precitipation" />
            <TextWrapper color={white} margin="0 0 0 -7.5rem">
              Total precitipation: {currentWeather.totalPrecipitation}
            </TextWrapper>
          </GridWrapper>
        </FlexWrapper>
      </WeatherInfoBlock>
    </>
  );
};

export default WeatherInfo;

const TemperatureBlock = styled.div`
  margin: 38px 46px 45px 61px;
`;

const WeatherInfoBlock = styled.div`
  margin: 0 0 0 60px;
`;
