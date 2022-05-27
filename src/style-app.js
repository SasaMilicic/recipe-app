import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

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

export const StyLogo = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  font-weight: 400;
`;

export const LogoCont = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 30px;
  }
`;
