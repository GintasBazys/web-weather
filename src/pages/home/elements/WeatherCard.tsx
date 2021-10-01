import { FlexWrapper } from "components";
import { TextWrapper } from "components/wrappers/TextWrapper";
import React from "react";

interface Props {
  data: any;
  onClick: () => void;
  isSelected: boolean;
}

const WeatherCard: React.FC<Props> = ({ data, onClick, isSelected }) => {
  console.log(isSelected);

  return (
    <FlexWrapper onClick={onClick}>
      <TextWrapper>{data.airTemperature}</TextWrapper>
      {isSelected ? <div>selected</div> : ""}
    </FlexWrapper>
  );
};

export default WeatherCard;
