import { FlexWrapper } from "components";
import React from "react";
import WeatherCard from "../elements/WeatherCard";

const MainContent = () => {
  return (
    <>
      <FlexWrapper backgroundColor="#F5F6FA">
        <WeatherCard />
      </FlexWrapper>
    </>
  );
};

export default MainContent;
