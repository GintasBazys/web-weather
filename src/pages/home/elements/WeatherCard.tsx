import { FlexWrapper, Image } from "components";
import { TextWrapper } from "components/wrappers/TextWrapper";
import React from "react";
import styled from "styled-components";
import { blue, lightGrey } from "utils/colors";
interface Props {
  data: any;
  onClick: () => void;
  isSelected: boolean;
  isWeatherNow: boolean;
}

const WeatherCard: React.FC<Props> = ({
  data,
  onClick,
  isSelected,
  isWeatherNow,
}) => {
  return (
    <>
      {isWeatherNow ? (
        <NowText>
          <TextWrapper color={blue} fontSize="0.75rem">
            now
          </TextWrapper>
        </NowText>
      ) : (
        ""
      )}

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
};

export default WeatherCard;

const WindDirectionContainer = styled.div`
  filter: invert(65%) sepia(4%) saturate(0%) hue-rotate(261deg) brightness(91%)
    contrast(82%);
  transform: matrix(0.9, -0.44, 0.44, 0.9, 0, 0);
`;

const NowText = styled.div`
  position: absolute;
  top: -20px;
  left: 8px;
`;
