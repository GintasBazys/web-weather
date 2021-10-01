import { FlexWrapper, GridWrapper } from "components";
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
    const filteredData = forecastData,
      filtered = filteredData.filter((data) =>
        TIMES.includes(data.forecastTimeUtc.split(" ").pop())
      );
    setCalendarTimes(filtered);
  }, [forecastData]);

  const handleSelect = (index: any, selectedKey: any) => {
    getCurrentWeather(calendarTimes[index]);
    setSelectedKey(selectedKey);
  };

  return (
    <>
      <FlexWrapper flexDirection="column">
        <GridWrapper columns={6}>
          {TIMES_TEXT.map((time) => (
            <div>{time}</div>
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
