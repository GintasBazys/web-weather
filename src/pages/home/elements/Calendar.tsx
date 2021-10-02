import { FlexWrapper, Image } from "components";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import ForecastCard from "./ForecastCard";

const Calendar = () => {
  const [currentWeather, setCurrentWeather] = useState<any>({});
  const [isQueryShown, setIsQueryShown] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [forecastData, setForecastData] = useState([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  const showCalendar = () => {
    axios
      .post("http://www.localhost:3000/weather", {
        location: searchInput,
      })
      .then((r) => {
        setForecastData(r.data.weather_data.forecastTimestamps);
        setCurrentWeather(r.data.weather_data.forecastTimestamps[0]);
      })
      .then(() => setIsQueryShown(true));
    console.log(currentWeather.forecastTimeUtc);
    return;
  };

  const getCurrentWeather = (childData: any) => {
    setCurrentWeather(childData);
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      showCalendar();
    }
  };

  return (
    <FlexWrapper flexDirection="row">
      <CardContainer>
        <Input onKeyPress={handleKeyPress} onChange={handleSearch} />
        <SearchStyle>
          <Image src="search_icon" />
        </SearchStyle>
        {isQueryShown && currentWeather.forecastTimeUtc !== undefined ? (
          <WeatherInfo currentWeather={currentWeather} />
        ) : (
          ""
        )}
      </CardContainer>
      {isQueryShown && currentWeather.forecastTimeUtc !== undefined ? (
        <ForecastCard
          getCurrentWeather={getCurrentWeather}
          forecastData={forecastData}
          currentWeather={currentWeather.forecastTimeUtc}
        />
      ) : (
        ""
      )}
    </FlexWrapper>
  );
};

export default Calendar;

const CardContainer = styled.div`
  height: 654px;
  background: #5fa6f1 0% 0% no-repeat padding-box;
  width: 374px;
  border-radius: 16px;
  margin: 31px 44px 0;
`;

const SearchStyle = styled.span`
  filter: invert(58%) sepia(49%) saturate(545%) hue-rotate(172deg)
    brightness(98%) contrast(93%);
  position: absolute;
  top: 180px;
  left: 360px;
`;

const Input = styled.input.attrs({
  type: "text",
})`
  width: 330px;
  height: 38px;
  background: white;
  border-radius: 20px;
  border: none;
  margin: 28px 25px 0 19px;
  position: relative;
  padding: 16px 16px;
  :focus {
    outline-width: 0;
  }
`;
