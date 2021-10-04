import React from "react";
import styled from "styled-components";
import { FlexWrapper, TextWrapper, GridWrapper } from "components";
import { grey, black, lightWhite, blue, white } from "utils/colors";
import WeatherCard from "./WeatherCard";
import { TIMES_TEXT, DAYS, MONTHS } from "utils/times";

interface Props {
  monthsArray: Array<number>;
  daysArray: Array<number>;
  selectedKey: any;
  handleSelect: () => void;
  fullDaysArray: Array<any>;
}

const WeeklyForecastDesktop: React.FC<Props> = ({
  monthsArray,
  daysArray,
  selectedKey,
  handleSelect,
  fullDaysArray,
}) => {
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

export default WeeklyForecastDesktop;

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
