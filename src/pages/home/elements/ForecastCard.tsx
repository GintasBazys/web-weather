import { FlexWrapper, GridWrapper } from "components";
import { TextWrapper } from "components/wrappers/TextWrapper";
import React, { useEffect, useState } from "react";
import { TIMES, TIMES_TEXT } from "utils/times";
import WeatherCard from "./WeatherCard";

interface Props {
  forecastData: any;
  getCurrentWeather: any;
}

const ForecastCard: React.FC<Props> = ({ forecastData, getCurrentWeather }) => {
  const [calendarTimes, setCalendarTimes] = useState([]);
  const [selectedKey, setSelectedKey] = useState<String>("");

  useEffect(() => {
    const filteredData = forecastData.filter((data) =>
      TIMES.includes(data.forecastTimeUtc.split(" ").pop())
    );
    setCalendarTimes(filteredData);
    if (calendarTimes !== undefined) {
      setSelectedKey(calendarTimes[0]?.forecastTimeUtc);
    }
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
            <div style={{ border: "1px solid #E8E8E8" }}>
              <FlexWrapper
                justifyContent="center"
                alignItems="center"
                margin="47px 78px"
              >
                <TextWrapper>{time}</TextWrapper>
              </FlexWrapper>
            </div>
          ))}
        </GridWrapper>
        <FlexWrapper>
          <GridWrapper columns={6}>
            {calendarTimes.length > 0 &&
              calendarTimes.map((data, index) => (
                <WeatherCard
                  data={data}
                  key={data.forecastTimeUtc}
                  isSelected={selectedKey === data.forecastTimeUtc}
                  onClick={() => handleSelect(index, data.forecastTimeUtc)}
                />
              ))}
          </GridWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
export default ForecastCard;
