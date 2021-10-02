import { FlexWrapper, GridWrapper } from "components";
import { TextWrapper } from "components/wrappers/TextWrapper";
import React, { useEffect, useState } from "react";
import { TIMES_TEXT } from "utils/times";
import WeatherCard from "./WeatherCard";
import styled from "styled-components";

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

  return (
    <>
      <FlexWrapper flexDirection="column">
        <GridWrapper backgroundColor="#FFFFFF" gap="0" columns={6}>
          {TIMES_TEXT.map((time) => (
            <ForecastcardContainer>
              <FlexWrapper
                justifyContent="center"
                alignItems="center"
                margin="47px 78px"
              >
                <TextWrapper color="#5A5A5A">{time}</TextWrapper>
              </FlexWrapper>
            </ForecastcardContainer>
          ))}
        </GridWrapper>
        <GridWrapper backgroundColor="#FFFFFF" columns={6} gap="0">
          {calendarTimes.length > 0 &&
            calendarTimes.map((data, index) => (
              <div style={{ border: "1px solid #E8E8E8" }}>
                <FlexWrapper
                  justifyContent="center"
                  alignItems="center"
                  margin="47px 78px"
                >
                  <WeatherCard
                    data={data}
                    key={data.forecastTimeUtc}
                    isSelected={selectedKey === data.forecastTimeUtc}
                    onClick={() => handleSelect(index, data.forecastTimeUtc)}
                  />
                </FlexWrapper>
                {selectedKey === data.forecastTimeUtc ? (
                  <FlexWrapper alignItems="left">
                    <SelectedRectangle></SelectedRectangle>
                  </FlexWrapper>
                ) : (
                  ""
                )}
              </div>
            ))}
        </GridWrapper>
      </FlexWrapper>
    </>
  );
};
export default ForecastCard;

const ForecastcardContainer = styled.div`
  border: 1px solid #e8e8e8;
  &:first-child {
    border-top-left-radius: 20px;
  }
  &:last-child {
    border-top-right-radius: 20px;
  }
`;

const SelectedRectangle = styled.div`
  background: #5fa6f1;
  height: 10px;
  width: 100%;
`;
