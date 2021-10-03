import React from "react";
import { FlexWrapper } from "components";

import { greyBackground } from "utils/colors";
import Calendar from "../elements/Calendar";

const MainContent = () => {
  return (
    <>
      <FlexWrapper backgroundColor={greyBackground}>
        <Calendar />
      </FlexWrapper>
    </>
  );
};

export default MainContent;
