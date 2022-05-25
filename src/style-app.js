import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const StyApp = styled.div`
  /* text-align: center; */
`;

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body{
    background-color:grey;
  } 
`;
