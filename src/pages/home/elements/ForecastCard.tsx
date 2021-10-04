import React, { useEffect, useState } from "react";
import { useQuery } from "utils/breakpoints";
import WeeklyForecastMobile from "./WeeklyForecastMobile";
import WeeklyForecastDesktop from "./WeeklyForecastDesktop";
import { TIMES } from "utils/times";

interface Props {
  forecastData: any;
  getCurrentWeather: any;
}

const ForecastCard: React.FC<Props> = ({ forecastData, getCurrentWeather }) => {
  const { isTablet } = useQuery();

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
    const formatedDays: any = [];
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
        TIMES.includes(data?.forecastTimeUtc?.split(" ").pop()) //filter data that only contains specified time
    );

    setMonthsArray([
      new Date(formatedDays[0]).getMonth(),
      new Date(formatedDays.at(-1)).getMonth(),
    ]); //starting date month; last day month

    //fullDaysArray - all possible week's values
    formatedDays.map((day: string) => {
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
      {isTablet ? (
        <WeeklyForecastMobile
          selectedKey={selectedKey}
          handleSelect={handleSelect}
          fullDaysArray={fullDaysArray}
          daysArray={daysArray}
        />
      ) : (
        <WeeklyForecastDesktop
          selectedKey={selectedKey}
          daysArray={daysArray}
          monthsArray={monthsArray}
          handleSelect={handleSelect}
          fullDaysArray={fullDaysArray}
        />
      )}
    </>
  );
};
export default React.memo(ForecastCard);
