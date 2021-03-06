import styled from "styled-components";

interface Styles {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  padding?: string;
  margin?: string;
  wrap?: string;
  backgroundColor?: string;
  height?: string;
  cursor?: string;
  position?: string;
}

export const FlexWrapper = styled.div<Styles>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  flex-wrap: ${({ wrap }) => wrap || ""};
  background-color: ${({ backgroundColor }) => backgroundColor || ""};
  height: ${({ height }) => height || ""};
  cursor: ${({ cursor }) => cursor || ""};
  position: ${({ position }) => position || ""};
`;
