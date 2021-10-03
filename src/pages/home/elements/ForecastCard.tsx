import { FlexWrapper, GridWrapper } from "components";
import { TextWrapper } from "components/wrappers/TextWrapper";
import React, { useEffect, useState } from "react";
import { DAYS, TIMES, TIMES_TEXT } from "utils/times";
import WeatherCard from "./WeatherCard";
import styled from "styled-components";
import { blue, grey, lightWhite, white } from "utils/colors";

interface Props {
  forecastData: any;
  getCurrentWeather: any;
}

const ForecastCard: React.FC<Props> = ({ forecastData, getCurrentWeather }) => {
  const [calendarTimes, setCalendarTimes] = useState([]);
  const [selectedKey, setSelectedKey] = useState<String>("");
  useEffect(() => {
    const filteredData = forecastData;
    setCalendarTimes(filteredData);
    setSelectedKey(filteredData[0].forecastTimeUtc);
  }, [forecastData]);

  const handleSelect = (index: any, selectedKey: any) => {
    getCurrentWeather(tempDaysArray[index]);
    setSelectedKey(selectedKey);
  };
  //Dynamic days array
  useEffect(() => {
    const thisDay = new Date();
    const daysArray = [];
    const formatedDays = [];
    for (let i = 0; i < 6; i++) {
      thisDay.setDate(thisDay.getDate() + 1);
      daysArray.push(thisDay.getDay());
      formatedDays.push(thisDay.toISOString().split("T")[0]);
    }
    setDaysArray([new Date().getDay(), ...daysArray]);
    setFormatedDays([new Date().toISOString().split("T")[0], ...formatedDays]);
  }, [forecastData]);

  const [daysArray, setDaysArray] = useState<Array<number>>([]);
  const [formatedDays, setFormatedDays] = useState<Array<string>>([]);
  const [fullDays, setFullDays] = useState([]);
  const tempDaysArray: string[] = [];

  const test = forecastData.filter(
    (data: { forecastTimeUtc: string | undefined }) =>
      TIMES.includes(data?.forecastTimeUtc?.split(" ").pop())
  );

  formatedDays.map((day) => {
    TIMES.map((time) => {
      tempDaysArray.push(`${day} ${time}`);
    });
  });

  tempDaysArray.map((t, idx) => {
    test.map((value: any) => {
      if (t.includes(value.forecastTimeUtc)) {
        tempDaysArray.splice(idx, 1, value);
      }
    });
  });

  return (
    <>
      <FlexWrapper flexDirection="row">
        {}
        <FlexWrapper flexDirection="column">
          {daysArray.map((day) => {
            return (
              <div style={{ marginTop: "13rem" }}>
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
            {tempDaysArray.length > 0 &&
              tempDaysArray.map((data, index) => (
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
                      key={data}
                      isSelected={false}
                      onClick={() => handleSelect(index, data)}
                      isWeatherNow={false}
                    />
                  </FlexWrapper>
                  {selectedKey === "" ? (
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
