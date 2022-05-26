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

export const StyDetails = styled.div`
  margin-top: 150px;
  margin-bottom: 70px;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 30px;
  }

  li {
    font-size: 20px;
    line-height: 40px;
  }

  ul {
    margin-top: 30px;
  }
`;

export const StyButton = styled.button`
  padding: 15px 30px;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 30px;
  font-weight: 600;
`;

export const StyInfo = styled.div`
  margin-left: 150px;
`;
