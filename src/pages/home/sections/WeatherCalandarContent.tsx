import { FlexWrapper } from "components";
import React from "react";
import { white } from "utils/colors";
import Calendar from "../elements/Calendar";

const MainContent = () => {
  return (
    <>
      <FlexWrapper backgroundColor={white}>
        <Calendar />
      </FlexWrapper>
    </>
  );
};

export default MainContent;
