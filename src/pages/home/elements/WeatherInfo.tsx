import React from "react";
import { FlexWrapper, GridWrapper, Image } from "components";
import styled from "styled-components";
import { TextWrapper } from "components/wrappers/TextWrapper";

const WeatherInfo = ({ currentWeather }: any) => {
  return (
    <>
      <TemperatureBlock>
        <FlexWrapper>
          <Image
            width="81px"
            height="85px"
            src={`${currentWeather.conditionCode}_white`}
          />
          <FlexWrapper margin="-16px 10px 10px">
            <TextWrapper color="#FFFFFF" fontSize="69px">
              {Math.round(currentWeather.airTemperature)}
            </TextWrapper>
            <TextWrapper color="#FFFFFF" fontSize="29px">
              o
            </TextWrapper>
          </FlexWrapper>
        </FlexWrapper>
        <TextWrapper fontSize="25px" color="#FFFFFF">
          Now it's {currentWeather.conditionCode}
        </TextWrapper>
      </TemperatureBlock>
      <WeatherInfoBlock>
        <FlexWrapper flexDirection="column">
          <GridWrapper margin="0 0 16px 0px" columns={2}>
            <Image src="wind-speed" />
            <TextWrapper color="#FFFFFF" margin="0 0 0 -120px">
              Wind speed: {currentWeather.windSpeed}ms
            </TextWrapper>
          </GridWrapper>
          <GridWrapper margin="0 0 16px 0px" columns={2}>
            <Image src="wind-gust" />
            <TextWrapper color="#FFFFFF" margin="0 0 0 -120px">
              Wind gust: {currentWeather.windGust}ms
            </TextWrapper>
          </GridWrapper>
          <GridWrapper columns={2} margin="0 0 16px 0px">
            <Image src="wind-direction" />
            <TextWrapper color="#FFFFFF" margin="0 0 0 -120px">
              Wind direction: {currentWeather.windDirection}
            </TextWrapper>
          </GridWrapper>
          <GridWrapper margin="0 0 16px 0px" columns={2}>
            <Image src="cloud-cover" />
            <TextWrapper color="#FFFFFF" margin="0 0 0 -120px">
              Cloud cover: {currentWeather.cloudCover}%
            </TextWrapper>
          </GridWrapper>
          <GridWrapper margin="0 0 16px 0px" columns={2}>
            <Image src="sea-level-pressure" />
            <TextWrapper color="#FFFFFF" margin="0 0 0 -120px">
              Sea level pressure: {currentWeather.seaLevelPressure}
            </TextWrapper>
          </GridWrapper>
          <GridWrapper margin="0 0 16px 0px" columns={2}>
            <Image src="total-precitipation" />
            <TextWrapper color="#FFFFFF" margin="0 0 0 -120px">
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
