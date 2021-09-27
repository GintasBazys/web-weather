import { FlexWrapper, Svg } from "components";
import { TextWrapper } from "components/wrappers/TextWrapper";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <FlexWrapper>
        <HeaderContainer>
          <TextWrapper
            margin="33px 52px 51px"
            fontWeight="900"
            fontSize="2.188rem"
            color="#5FA6F1"
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
  background: #ffffff 0% 0% no-repeat padding-box;
`;
