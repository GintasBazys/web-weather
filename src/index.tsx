import React, { StrictMode } from "react";
import { WrapPageElementBrowserArgs } from "gatsby";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
}
html {
    font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
}
`;

export const wrapRootElement: React.FC<WrapPageElementBrowserArgs> = ({
  element,
}) => (
  <StrictMode>
    <GlobalStyle />
    {element}
  </StrictMode>
);
