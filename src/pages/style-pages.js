import styled from 'styled-components';

export const StyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
`;

export const StyCard = styled.div`
  img {
    width: 100%;
    border-radius: 30px;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 15px;
  }
`;
