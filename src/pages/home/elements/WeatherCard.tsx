import React from "react";
import { FlexWrapper, Image, TextWrapper } from "components";

import styled from "styled-components";
import { grey, lightGrey } from "utils/colors";
interface Props {
  data: any;
  onClick: () => void;
  isSelected: boolean;
}

const WeatherCard: React.FC<Props> = ({ data, onClick, isSelected }) => {
  if (typeof data === "string") {
    return (
      <>
        <FlexWrapper margin="2.5rem 0" flexDirection="column" onClick={onClick}>
          <TextWrapper color={grey}>NA</TextWrapper>
        </FlexWrapper>
      </>
    );
  } else {
    return (
      <>
        <FlexWrapper flexDirection="column" onClick={onClick}>
          <FlexWrapper flexDirection="column" justifyContent="center">
            <Image width="2.375rem" height="2.5rem" src={data.conditionCode} />
            <FlexWrapper>
              <TextWrapper color={lightGrey} fontSize="1.563rem">
                {Math.round(data.airTemperature)}
              </TextWrapper>
              <TextWrapper color={lightGrey} fontSize="0.813rem">
                o
              </TextWrapper>
            </FlexWrapper>

            <FlexWrapper alignItems="baseline" margin="0.938rem -0.625rem 0">
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
