import { FlexWrapper, Svg } from "components";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import ForecastCard from "./ForecastCard";

const Calendar = () => {
  const [currentWeather, setCurrentWeather] = useState<any>({});
  const [isQueryShown, setIsQueryShown] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    // axios
    //   .post("http://www.localhost:3000/weather", {
    //     location: searchInput,
    //   })
    //   .then((r) => {
    //     setCurrentWeather(r.data.weather_data.forecastTimestamps[0]);
    //   });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const showCalendar = () => {
    setIsQueryShown(true);
    axios
      .post("http://www.localhost:3000/weather", {
        location: searchInput,
      })
      .then((r) => {
        setForecastData(r.data.weather_data.forecastTimestamps);
        setCurrentWeather(r.data.weather_data.forecastTimestamps[0]);
      });
  };

  const getCurrentWeather = (childData: any) => {
    setCurrentWeather(childData);
  };

  const handleKeyPress = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      console.log("test");
      showCalendar();
    }
  };

  return (
    <FlexWrapper flexDirection="row">
      <CardContainer>
        <Input onKeyPress={handleKeyPress} onChange={handleSearch} />
        <SearchStyle>
          <Svg onClick={showCalendar} src="search_icon" />
        </SearchStyle>
        {isQueryShown ? <WeatherInfo currentWeather={currentWeather} /> : ""}
      </CardContainer>
      {isQueryShown ? (
        <ForecastCard
          getCurrentWeather={getCurrentWeather}
          forecastData={forecastData}
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
