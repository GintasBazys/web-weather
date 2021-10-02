import { FlexWrapper, GridWrapper } from "components";
import { TextWrapper } from "components/wrappers/TextWrapper";
import React, { useEffect, useState } from "react";
import { DAYS, TIMES_TEXT } from "utils/times";
import WeatherCard from "./WeatherCard";
import styled from "styled-components";
import { blue, grey, lightWhite, white } from "utils/colors";

interface Props {
  forecastData: any;
  getCurrentWeather: any;
  currentWeather: any;
}

const ForecastCard: React.FC<Props> = ({
  forecastData,
  getCurrentWeather,
  currentWeather,
}) => {
  const [calendarTimes, setCalendarTimes] = useState([]);
  const [selectedKey, setSelectedKey] = useState<String>("");
  useEffect(() => {
    // const filteredData = forecastData.filter((data) =>
    //   TIMES.includes(data.forecastTimeUtc.split(" ").pop())
    // ); Array should consist of 42 elements - 7 days + siz times shown on each day
    //try to use splice later to add content - full 24 hours for each day
    const filteredData = forecastData.slice(0, 42);
    setCalendarTimes(filteredData);
    setSelectedKey(filteredData[0].forecastTimeUtc);
  }, [forecastData]);

  const handleSelect = (index: any, selectedKey: any) => {
    getCurrentWeather(calendarTimes[index]);
    setSelectedKey(selectedKey);
  };
  //Dynamic days array
  useEffect(() => {
    const thisDay = new Date();
    const daysArray = [];
    for (let i = 1; i < 7; i++) {
      thisDay.setDate(thisDay.getDate() + i);
      daysArray.push(thisDay.getDay());
    }
    setDaysArray(daysArray);
  }, [forecastData]);

  const [daysArray, setDaysArray] = useState<Array<number>>([]);

  return (
    <>
      <FlexWrapper flexDirection="row">
        <FlexWrapper flexDirection="column">
          <div style={{ marginTop: "12rem" }}>
            <TextWrapper fontSize="15px" color={grey}>
              Today
            </TextWrapper>
          </div>
          {daysArray.map((day) => {
            return (
              <div style={{ marginTop: "11.8rem" }}>
                <TextWrapper fontSize="15px" color={grey}>
                  {DAYS[day]}
                </TextWrapper>
              </div>
            );
          })}
        </FlexWrapper>
        <FlexWrapper flexDirection="column">
          <GridWrapper backgroundColor={white} gap="0" columns={6}>
            {TIMES_TEXT.map((time) => (
              <ForecastcardContainer>
                <FlexWrapper
                  justifyContent="center"
                  alignItems="center"
                  margin="2.938rem 4.875rem"
                >
                  <TextWrapper color={grey}>{time}</TextWrapper>
                </FlexWrapper>
              </ForecastcardContainer>
            ))}
          </GridWrapper>
          <GridWrapper backgroundColor={white} columns={6} gap="0">
            {calendarTimes.length > 0 &&
              calendarTimes.map((data: { forecastTimeUtc: string }, index) => (
                <CalendarBox>
                  <FlexWrapper
                    justifyContent="center"
                    alignItems="center"
                    margin="2.938rem 4.875rem"
                    cursor="pointer"
                    position="relative"
                  >
                    <WeatherCard
                      data={data}
                      key={data.forecastTimeUtc}
                      isSelected={selectedKey === data.forecastTimeUtc}
                      onClick={() => handleSelect(index, data.forecastTimeUtc)}
                      isWeatherNow={
                        data.forecastTimeUtc ===
                        calendarTimes[0].forecastTimeUtc
                      }
                    />
                  </FlexWrapper>
                  {selectedKey === data.forecastTimeUtc ? (
                    <FlexWrapper>
                      <SelectedRectangle></SelectedRectangle>
                    </FlexWrapper>
                  ) : (
                    ""
                  )}
                </CalendarBox>
              ))}
          </GridWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
export default ForecastCard;

const ForecastcardContainer = styled.div`
  border: 1px solid ${lightWhite};
  &:first-child {
    border-top-left-radius: 1.25rem;
  }
  &:last-child {
    border-top-right-radius: 1.25rem;
  }
`;

const SelectedRectangle = styled.div`
  background: ${blue};
  height: 0.625rem;
  width: 100%;
`;

const CalendarBox = styled.div`
  border: 0.063rem solid ${lightWhite};
`;
