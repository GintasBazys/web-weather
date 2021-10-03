import React, { useEffect, useState } from "react";
import { FlexWrapper, GridWrapper, TextWrapper } from "components";
import { DAYS, MONTHS, TIMES, TIMES_TEXT } from "utils/times";
import WeatherCard from "./WeatherCard";
import styled from "styled-components";
import { black, blue, grey, lightWhite, white } from "utils/colors";

interface Props {
  forecastData: any;
  getCurrentWeather: any;
}

const ForecastCard: React.FC<Props> = ({ forecastData, getCurrentWeather }) => {
  const [selectedKey, setSelectedKey] = useState<string>("");

  const [daysArray, setDaysArray] = useState<Array<number>>([]);
  const [monthsArray, setMonthsArray] = useState<Array<number>>([]);

  const [fullDaysArray, setFullDaysArray] = useState<Array<string>>([]);
  //Show selected weather card forecast information
  const handleSelect = (
    index: number,
    selectedKey: React.SetStateAction<string>
  ) => {
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
    for (let i = 1; i < 7; i++) {
      thisDay.setDate(thisDay.getDate() + 1);
      daysArray.push(thisDay.getDay()); //0-7
      formatedDays.push(thisDay.toISOString().split("T")[0]); //Format 2000-00-00 00:00:00
    }
    formatedDays.unshift(new Date().toISOString().split("T")[0]);
    setDaysArray([new Date().getDay(), ...daysArray]); //0-7

    const fullDaysArray: string[] = [];

    const availableTimes = forecastData.filter(
      (data: { forecastTimeUtc: string }) =>
        TIMES.includes(data?.forecastTimeUtc?.split(" ").pop()) //filter fata that only contains specified time
    );

    setMonthsArray([
      new Date(formatedDays[0]).getMonth(),
      new Date(formatedDays.at(-1)).getMonth(),
    ]); //starting date month; last day month

    //fullDaysArray - all possible week's values
    formatedDays.map((day) => {
      TIMES.map((time) => {
        fullDaysArray.push(`${day} ${time}`);
      });
    });

    //replacing values in arrry using API data
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
      <FlexWrapper flexDirection="column">
        <FlexWrapper margin="0 0 0 5.313rem">
          {monthsArray[0] === monthsArray[1] ? (
            <TextWrapper fontWeight="700" color={black} fontSize="2.188rem">
              {MONTHS[monthsArray[0]]} {new Date().getDate()}-
              {new Date().getDate() + 7}
            </TextWrapper>
          ) : (
            <TextWrapper fontWeight="700" color={black} fontSize="2.188rem">
              {MONTHS[monthsArray[0]]}/{MONTHS[monthsArray[1]]}{" "}
              {new Date().getDate()}-{new Date().getDate() + 7}
            </TextWrapper>
          )}
        </FlexWrapper>

        <FlexWrapper flexDirection="row">
          <FlexWrapper flexDirection="row">
            <FlexWrapper margin="13.75rem 0 0" flexDirection="column">
              {daysArray.slice(0, 7).map((day, idx) => {
                return (
                  <div>
                    {idx === 0 ? (
                      <TextWrapper key={day} fontSize="0.938rem" color={grey}>
                        Today
                      </TextWrapper>
                    ) : (
                      <TextWrapper
                        key={day}
                        margin="12rem 0 0"
                        fontSize="0.938rem"
                        color={grey}
                      >
                        {DAYS[day]}
                      </TextWrapper>
                    )}
                  </div>
                );
              })}
            </FlexWrapper>
          </FlexWrapper>
          {/* TODO move FlexWrapper to a new component */}
          <FlexWrapper margin="0.625rem" flexDirection="column">
            <GridWrapper backgroundColor={white} gap="0" columns={6}>
              {TIMES_TEXT.map((time) => (
                <ForecastcardContainer key={time}>
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
                fullDaysArray.map((data, index) => {
                  return (
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
                  );
                })}
            </GridWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
export default ForecastCard;

const ForecastcardContainer = styled.div`
  border: 0.063rem solid ${lightWhite};
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
