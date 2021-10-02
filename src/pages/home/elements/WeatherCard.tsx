import { FlexWrapper, Image } from "components";
import { TextWrapper } from "components/wrappers/TextWrapper";
import React from "react";

interface Props {
  data: any;
  onClick: () => void;
  isSelected: boolean;
}

const WeatherCard: React.FC<Props> = ({ data, onClick, isSelected }) => {
  return (
    <>
      <FlexWrapper flexDirection="column" onClick={onClick}>
        <Image width="38px" height="40px" src={data.conditionCode} />
        <FlexWrapper justifyContent="center">
          <TextWrapper color="#959595" fontSize="25px">
            {Math.round(data.airTemperature)}
          </TextWrapper>
          <TextWrapper color="#959595" fontSize="13px">
            o
          </TextWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};

export default WeatherCard;
