import React from "react";
import Header from "./sections/Header";
import MainContent from "./sections/WeatherCalandarContent";
import { useQuery } from "utils/breakpoints";

const Landing = () => {
  const { isTablet } = useQuery();
  return (
    <>
      {!isTablet ? (
        <>
          <Header />
        </>
      ) : (
        ""
      )}
      <MainContent />
    </>
  );
};

export default Landing;
