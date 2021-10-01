import { FlexWrapper, GridWrapper } from "components";
import React, { useEffect, useState } from "react";
import { TIMES } from "utils/times";

interface Props {
  forecastData: any;
  setCurrentWeather: any;
}

const ForecastCard: React.FC<Props> = ({ forecastData, setCurrentWeather }) => {
  const [calendarTimes, setCalendarTimes] = useState([]);
  const columns: any = [];

  useEffect(() => {
    const filteredData = forecastData,
      filtered = filteredData.filter((data) =>
        TIMES.includes(data.forecastTimeUtc.split(" ").pop())
      );
    setCalendarTimes(filtered);
    setCurrentWeather(filtered[0]);
  }, [forecastData]);

  console.log(calendarTimes);

  return (
    <>
      <GridWrapper columns={6}>
        {calendarTimes.length > 0 &&
          calendarTimes.map((data) => <div>{data.airTemperature}</div>)}
      </GridWrapper>
    </>
  );
};
export default ForecastCard;
