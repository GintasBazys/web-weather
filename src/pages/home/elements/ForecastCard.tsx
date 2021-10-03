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
  const [selectedKey, setSelectedKey] = useState<String>("");

  const [daysArray, setDaysArray] = useState<Array<number>>([]);
  const [formatedDays, setFormatedDays] = useState<Array<string>>([]);
  const [fullDaysArray, setFullDaysArray] = useState<Array<string>>([]);

  const handleSelect = (index: number, selectedKey: string) => {
    getCurrentWeather(fullDaysArray[index]);
    if (typeof (selectedKey === "string")) {
      setSelectedKey(selectedKey);
    } else if (typeof (selectedKey === "object")) {
      setSelectedKey(selectedKey.forecastTimeUtc);
    }
  };
  //Dynamic days array
  useEffect(() => {
    const thisDay = new Date();
    const daysArray = [];
    const formatedDays = [];
    for (let i = 0; i < 7; i++) {
      thisDay.setDate(thisDay.getDate() + 1);
      daysArray.push(thisDay.getDay());
      formatedDays.push(thisDay.toISOString().split("T")[0]);
    }
    setDaysArray([new Date().getDay(), ...daysArray]); //Days numbers from 0 to 7
    setFormatedDays([new Date().toISOString().split("T")[0], ...formatedDays]);

    const fullDaysArray: string[] = [];

    const availableTimes = forecastData.filter(
      (data: { forecastTimeUtc: string }) =>
        TIMES.includes(data?.forecastTimeUtc?.split(" ").pop())
    );
    //Format 2000-00-00 00:00:00
    formatedDays.map((day) => {
      TIMES.map((time) => {
        fullDaysArray.push(`${day} ${time}`);
      });
    });

    fullDaysArray.map((t, idx) => {
      availableTimes.map((value: any) => {
        if (t.includes(value.forecastTimeUtc)) {
          fullDaysArray.splice(idx, 1, value);
        }
      });
    });

    setFullDaysArray(fullDaysArray);
  }, [forecastData]);

  return (
    <>
      <FlexWrapper flexDirection="row">
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
            {fullDaysArray.length > 0 &&
              fullDaysArray.map((data, index) => (
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
                      isSelected={
                        typeof (data === "object")
                          ? selectedKey === data.forecastTimeUtc
                          : selectedKey === data
                      }
                      onClick={() => handleSelect(index, data)}
                      isWeatherNow={false}
                    />
                  </FlexWrapper>
                  {selectedKey === data ? (
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

const CalendarBox = styled.div`
  border: 0.063rem solid ${lightWhite};
`;

const SelectedRectangle = styled.div`
  background: ${blue};
  height: 0.625rem;
  width: 100%;
`;
