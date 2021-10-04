import React, { useEffect, useState } from "react";
import { FlexWrapper, GridWrapper, Image, TextWrapper } from "components";
import { DAYS } from "utils/times";
import { white } from "utils/colors";
import { NIGHT_CONDITIONS } from "utils/NightConditions";
import { useQuery } from "utils/breakpoints";

const WeatherInfo = ({ currentWeather, isNow }: any) => {
  const { isTablet } = useQuery();

  const [weatherType, setWeatherType] = useState("");
  useEffect(() => {
    if (typeof currentWeather === "string") {
      setWeatherType("string");
    } else setWeatherType("object");
  }, [currentWeather]);
  const dateAndTime =
    typeof currentWeather === "string"
      ? "1900-01-01"
      : currentWeather.forecastTimeUtc.split(" "); //date added to avoid undefined error

  const day = new Date(dateAndTime[0]).getDay();

  if (weatherType === "string") {
    return (
      <>
        <FlexWrapper margin="7.5rem 0" justifyContent="center">
          <TextWrapper margin="2.5rem 0" fontSize="3.5rem" color={white}>
            NA
          </TextWrapper>
        </FlexWrapper>
      </>
    );
  } else {
    const hours = dateAndTime[1].substring(0, 5);

    return (
      <>
        <FlexWrapper
          flexDirection="column"
          margin={
            isTablet
              ? "2.375rem 2.875rem 2.813rem 1.5rem"
              : "2.375rem 2.875rem 2.813rem 3.813rem"
          }
        >
          <FlexWrapper>
            {hours === "22:00" ||
            (hours === "02:00" &&
              NIGHT_CONDITIONS.includes(currentWeather.conditionCode)) ? (
              <Image
                width="5.063rem"
                height="5.313rem"
                src={`${currentWeather.conditionCode}_white_night`}
              />
            ) : (
              <Image
                width="5.063rem"
                height="5.313rem"
                src={`${currentWeather.conditionCode}_white`}
              />
            )}
            <FlexWrapper margin="-1rem 0.625rem 0.625rem">
              <TextWrapper color={white} fontSize="4.313rem">
                {Math.round(currentWeather.airTemperature)}
              </TextWrapper>
              <TextWrapper color={white} fontSize="1.813rem">
                o
              </TextWrapper>
            </FlexWrapper>
          </FlexWrapper>

          {isNow ? (
            <div>
              <TextWrapper fontSize="1.563rem" color={white}>
                Now It's {currentWeather.conditionCode}
              </TextWrapper>
            </div>
          ) : day === new Date().getDay() ? (
            <div>
              <TextWrapper fontSize="1.563rem" color={white}>
                {hours} {currentWeather.conditionCode}
              </TextWrapper>
            </div>
          ) : (
            <div>
              <TextWrapper fontSize="1.563rem" color={white}>
                {DAYS[day]}
              </TextWrapper>
              <TextWrapper fontSize="1.563rem" color={white}>
                {hours} {currentWeather.conditionCode}
              </TextWrapper>
            </div>
          )}
        </FlexWrapper>
        <FlexWrapper flexDirection="column" margin="0 0 0 3.75rem">
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
            <GridWrapper columns={2} margin="0 0 1rem 0">
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
            <GridWrapper margin="0 0 1rem 0" columns={2}>
              <Image src="sea-level-pressure" />
              <TextWrapper color={white} margin="0 0 0 -7.5rem">
                Sea level pressure: {currentWeather.seaLevelPressure}
              </TextWrapper>
            </GridWrapper>
            <GridWrapper margin="0 0 1rem 0" columns={2}>
              <Image src="total-precitipation" />
              <TextWrapper color={white} margin="0 0 0 -7.5rem">
                Total precitipation: {currentWeather.totalPrecipitation}
              </TextWrapper>
            </GridWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </>
    );
  }
};

export default WeatherInfo;
