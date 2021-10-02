import { FlexWrapper, Image } from "components";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import ForecastCard from "./ForecastCard";
import { blue, white } from "utils/colors";
import { CITIES } from "utils/cities";
import SuggestionList from "./SuggestionList";

const Calendar = () => {
  const [currentWeather, setCurrentWeather] = useState<any>({});
  const [isQueryShown, setIsQueryShown] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [forecastData, setForecastData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    const suggestionArray: Array<string> = [];
    if (event.target.value !== "") {
      CITIES.map((city) => {
        city.includes(event.target.value) ? suggestionArray.push(city) : "";
      });
    }
    setSuggestions(suggestionArray);
  };
  //console.log(suggestions);
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
    return;
  };

  const getCurrentWeather = (childData: any) => {
    setCurrentWeather(childData);
  };

  const getCurrentSuggestions = (childData: string) => {
    setSearchInput(childData);
    setSuggestions([]);
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      showCalendar();
    }
  };

  return (
    <FlexWrapper flexDirection="row">
      <CardContainer>
        <Input
          value={searchInput}
          onKeyPress={handleKeyPress}
          onChange={handleSearch}
        />
        {suggestions.length > 0 ? (
          <SuggestionList
            getCurrentSuggestions={getCurrentSuggestions}
            suggestions={suggestions}
          />
        ) : (
          ""
        )}
        <SearchStyle>
          <Image src="search_icon" onClick={showCalendar} />
        </SearchStyle>
        {isQueryShown && currentWeather.forecastTimeUtc !== undefined ? (
          <WeatherInfo
            currentWeather={currentWeather}
            isNow={
              currentWeather.forecastTimeUtc === forecastData[0].forecastTimeUtc
            } //TODO forecastData[0].forecastTimeUtc to current time weather without using [0]
          />
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
  height: 40.875rem;
  background: ${blue} 0% 0% no-repeat padding-box;
  width: 23.375rem;
  border-radius: 1rem;
  margin: 1.938rem 2.75rem 0;
`;

const SearchStyle = styled.span`
  filter: invert(58%) sepia(49%) saturate(545%) hue-rotate(172deg)
    brightness(98%) contrast(93%);
  position: absolute;
  top: 11.25rem;
  left: 22.5rem;
`;

const Input = styled.input.attrs({
  type: "text",
})`
  width: 20.625rem;
  height: 2.375rem;
  background: ${white};
  border-radius: 1.25rem;
  border: none;
  margin: 1.75rem 1.563rem 0 1.188rem;
  position: relative;
  padding: 1rem 1rem;
  :focus {
    outline-width: 0;
  }
  z-index: 0;
`;
