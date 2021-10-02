import { FlexWrapper } from "components";
import { TextWrapper } from "components/wrappers/TextWrapper";
import React from "react";
import styled from "styled-components";
import { blue, white } from "utils/colors";

const Header = () => {
  return (
    <>
      <FlexWrapper>
        <HeaderContainer>
          <TextWrapper
            margin="2.063rem 3.25rem 3.188rem"
            fontWeight="900"
            fontSize="2.188rem"
            color={blue}
          >
            weather
          </TextWrapper>
        </HeaderContainer>
      </FlexWrapper>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 111px;
  background: ${white} 0% 0% no-repeat padding-box;
`;
