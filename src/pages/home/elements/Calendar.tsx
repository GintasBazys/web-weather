import React, { useState } from "react";
import {
  FlexWrapper,
  Image,
  CardContainer,
  TextWrapper,
  SearchStyleWrapper,
} from "components";
import styled from "styled-components";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import ForecastCard from "./ForecastCard";
import { white, blue } from "utils/colors";
import { CITIES } from "utils/cities";
import SuggestionList from "./SuggestionList";
import { useQuery } from "utils/breakpoints";

const Calendar = () => {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [isQueryShown, setIsQueryShown] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [forecastData, setForecastData] = useState([]);
  const [suggestions, setSuggestions] = useState<Array<string>>([]);

  const { isTablet } = useQuery();

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

  const showCalendar = () => {
    axios
      .post("http://www.localhost:3000/weather", {
        location: searchInput,
      })
      .then((r) => {
        if (r.data.success) {
          setForecastData(r.data.weather_data.forecastTimestamps);
          setCurrentWeather(r.data.weather_data.forecastTimestamps[0]);
          setIsQueryShown(true);
        } else {
          alert("No search results");
        }
      });
    return;
  };

  const getCurrentWeather = (childData: string) => {
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
    <FlexWrapper flexDirection={isTablet ? "column" : "row"}>
      <CardContainer
        height="40.875rem"
        background={`${blue} 0% 0% no-repeat padding-box`}
        width={isTablet ? "100vw" : "23.375rem"}
        borderRadius={isTablet ? "" : "1rem"}
        margin={isTablet ? "" : "1.938rem 2.75rem 0"}
      >
        {isTablet ? (
          <TextWrapper
            margin="2.063rem 1.5rem 0"
            fontWeight="900"
            fontSize="2.188rem"
            color={white}
          >
            weather
          </TextWrapper>
        ) : (
          ""
        )}
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
        <SearchStyleWrapper
          top={isTablet ? "7.5rem" : "12.5rem"}
          left={isTablet ? "20rem" : "22.5rem"}
        >
          <Image src="search_icon" onClick={showCalendar} />
        </SearchStyleWrapper>
        {isQueryShown && currentWeather ? (
          <WeatherInfo
            currentWeather={currentWeather}
            isNow={
              currentWeather.forecastTimeUtc === forecastData[0].forecastTimeUtc
            }
          />
        ) : (
          ""
        )}
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

const Input = styled.input.attrs({
  type: "text",
})`
  width: 20.625rem;
  height: 2.375rem;
  background: ${white};
  border-radius: 1.25rem;
  border: none;
  margin: 1.75rem 1.563rem 0 1.188rem; //1.75 0
  position: relative;
  padding: 1rem 1rem;
  :focus {
    outline-width: 0;
  }
  z-index: 0;
`;
