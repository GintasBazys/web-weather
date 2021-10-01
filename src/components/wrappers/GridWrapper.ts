import styled from "styled-components";

interface Props {
  columns?: number;
  gap?: string;
  alignItems?: string;
  justifyItems?: string;
  margin?: string;
}

export const GridWrapper = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: ${({ gap }) => gap || "1rem"};
  align-items: ${({ alignItems }) => alignItems || ""};
  justify-items: ${({ justifyItems }) => justifyItems || ""};
  margin: ${({ margin }) => margin || ""};
`;
