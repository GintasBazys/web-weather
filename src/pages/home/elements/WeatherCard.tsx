import React from "react";
import { FlexWrapper, Image, TextWrapper } from "components";

import styled from "styled-components";
import { grey, lightGrey } from "utils/colors";
import { useQuery } from "utils/breakpoints";
import { NIGHT_CONDITIONS } from "utils/NightConditions";
interface Props {
  data: any;
  onClick: () => void;
  isSelected: boolean;
}

const WeatherCard: React.FC<Props> = ({ data, onClick, isSelected }) => {
  const { isTablet } = useQuery();

  if (typeof data === "string") {
    return (
      <>
        <FlexWrapper
          margin={isTablet ? "1rem 0" : "2.5rem 0"}
          flexDirection={isTablet ? "row" : "column"}
          onClick={onClick}
        >
          <TextWrapper color={grey}>NA</TextWrapper>
        </FlexWrapper>
      </>
    );
  } else {
    const hours = data.forecastTimeUtc.slice(11, 16);

    return (
      <>
        <FlexWrapper
          flexDirection={isTablet ? "row" : "column"}
          onClick={onClick}
        >
          <FlexWrapper
            flexDirection={isTablet ? "row" : "column"}
            justifyContent={isTablet ? "" : "center"}
            margin={isTablet ? "1rem 0" : ""}
          >
            {isTablet ? (
              <TextWrapper margin="0.625rem 0.625rem 0 0">{hours}</TextWrapper>
            ) : (
              ""
            )}
            {hours === "22:00" ||
            (hours === "02:00" &&
              NIGHT_CONDITIONS.includes(data.conditionCode)) ? (
              <Image
                width="2.375rem"
                height="2.5rem"
                src={`${data.conditionCode}_night`}
              />
            ) : (
              <Image
                width="2.375rem"
                height="2.5rem"
                src={data.conditionCode}
              />
            )}

            <FlexWrapper margin={isTablet ? "0 0.625rem" : ""}>
              <TextWrapper color={lightGrey} fontSize="1.563rem">
                {Math.round(data.airTemperature)}
              </TextWrapper>
              <TextWrapper color={lightGrey} fontSize="0.813rem">
                o
              </TextWrapper>
            </FlexWrapper>

            <FlexWrapper
              alignItems="baseline"
              margin={
                isTablet ? "0.5rem 0 0rem 0.625rem" : "0.938rem -0.625rem 0"
              }
            >
              <WindDirectionContainer>
                <Image padding="0 1.25rem 0 0" src="wind-direction" />
              </WindDirectionContainer>
              <TextWrapper color={lightGrey} fontSize="0.938rem">
                {data.windSpeed} ms
              </TextWrapper>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </>
    );
  }
};

export default WeatherCard;

const WindDirectionContainer = styled.div`
  filter: invert(65%) sepia(4%) saturate(0%) hue-rotate(261deg) brightness(91%)
    contrast(82%);
  transform: matrix(0.9, -0.44, 0.44, 0.9, 0, 0);
`;
