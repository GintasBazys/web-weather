import React from "react";
import { FlexWrapper } from "components";
import { lightWhite } from "utils/colors";
import WeatherCard from "./WeatherCard";
import styled from "styled-components";
import { DAYS } from "utils/times";

interface Props {
  handleSelect: () => void;
  fullDaysArray: Array<any>;
  selectedKey: any;
  daysArray: Array<number>;
}

const WeeklyForecastMobile: React.FC<Props> = ({
  handleSelect,
  fullDaysArray,
  selectedKey,
  daysArray,
}) => {
  console.log(daysArray);
  return (
    <>
      {fullDaysArray.length > 0 &&
        fullDaysArray.map((data, index) => {
          return (
            <>
              <CalendarBox>
                <FlexWrapper
                  margin="0 4.875rem"
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
              </CalendarBox>
            </>
          );
        })}
    </>
  );
};

const CalendarBox = styled.div`
  border: 0.063rem solid ${lightWhite};
  display: flex;
  justify-content: center;
`;

export default WeeklyForecastMobile;
