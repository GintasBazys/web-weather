import styled from "styled-components";

interface Styles {
  height?: string;
  background?: string;
  width?: string;
  borderRadius?: string;
  margin?: string;
}

export const CardContainer = styled.div<Styles>`
  height: ${({ height }) => height || ""};
  background: ${({ background }) => background || ""};
  width: ${({ width }) => width || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  margin: ${({ margin }) => margin || ""};
`;
