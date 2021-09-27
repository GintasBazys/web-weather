import styled from "styled-components";

interface Styles {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  margin?: string;
}

export const TextWrapper = styled.div<Styles>`
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
  color: ${({ color }) => color || "black"};
  margin: ${({ margin }) => margin || ""};
`;
