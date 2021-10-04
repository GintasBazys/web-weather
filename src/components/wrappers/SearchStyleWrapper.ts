import styled from "styled-components";

interface Styles {
  top?: string;
  left?: string;
}

export const SearchStyleWrapper = styled.span<Styles>`
  filter: invert(58%) sepia(49%) saturate(545%) hue-rotate(172deg)
    brightness(98%) contrast(93%);
  position: absolute;
  top: ${({ top }) => top || ""};
  left: ${({ left }) => left || ""};
`;
