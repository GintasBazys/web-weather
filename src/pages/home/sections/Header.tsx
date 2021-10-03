import React from "react";
import { FlexWrapper, TextWrapper } from "components";

import { blue, white } from "utils/colors";

const Header = () => {
  return (
    <>
      <FlexWrapper backgroundColor={white}>
        <TextWrapper
          margin="2.063rem 3.25rem 3.188rem"
          fontWeight="900"
          fontSize="2.188rem"
          color={blue}
        >
          weather
        </TextWrapper>
      </FlexWrapper>
    </>
  );
};

export default Header;
