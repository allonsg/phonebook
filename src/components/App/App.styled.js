import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
`;

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

  body {
    position: relative;
    margin: 0;
    background-color: ${props => props.theme.bgMain};
  }
`;
