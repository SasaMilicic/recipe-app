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
    margin: 0% 5%;
  } 

  h4{
  font-size: 15px;
  color: rgb(56,56,56);
  }


  h3 {
  font-size: 25px;
  color: rgb(56,56,56);
  line-height: 35px;
  margin: 30px 0px;
  }

  a{
  color: rgb(56,56,56);
  }
`;
