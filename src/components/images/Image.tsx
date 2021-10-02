import React, { useEffect } from "react";
import LazyLoad, { forceVisible } from "react-lazyload";
import styled from "styled-components";
import { images } from "utils/images";

interface Styles {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  maxWidth?: string;
  maxHeigth?: string;
  minWidth?: string;
}

const Img = styled.img<Styles>`
  display: block;
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  max-width: ${({ maxWidth }) => maxWidth || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
`;

interface Props extends Styles {
  src: string;
}

export const Image: React.FC<Props> = ({ src, ...rest }) => {
  useEffect(() => {
    forceVisible();
  }, []);

  return !images[src] ? null : (
    <LazyLoad once>
      <Img src={images[src]} alt={images[src]} {...rest} />
    </LazyLoad>
  );
};
