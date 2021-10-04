import React from "react";
import { FlexWrapper } from "components";
import { lightWhite } from "utils/colors";
import WeatherCard from "./WeatherCard";
import styled from "styled-components";
import { DAYS } from "utils/times";
import { useQuery } from "utils/breakpoints";

interface Props {
  handleSelect: (index: number, data: any) => void;
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
  const { isTablet } = useQuery();

  return (
    <>
      {fullDaysArray.length > 0 &&
        fullDaysArray.map((data, index) => {
          return (
            <>
              <CalendarBox>
                <FlexWrapper
                  margin={isTablet ? "" : "0 4.875rem"}
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

export default React.memo(WeeklyForecastMobile);
