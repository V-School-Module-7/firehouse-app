import { createGlobalStyle } from "styled-components";

const breakpoint = {
  mobile: "599px",
  tabletPortrait: "900px",
  tabletLandscape: "1200px",
  desktop: "1800px"
};

export const media = {
  mobile: `(max-width: ${breakpoint.mobile})`,
  tabletPortrait: `(min-width: ${breakpoint.mobile})`,
  tabletLandscape: `(min-width: ${breakpoint.tabletPortrait})`,
  desktop: `(min-width: ${breakpoint.tabletLandscape})`,
  desktopLarge: `(min-width: ${breakpoint.desktop})`
};

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    font-family: "Roboto", "Arial", "Helvetica", sans-serif;
  }
`;

export default GlobalStyle;
