import styled from 'styled-components';

export const StyPopular = styled.div`
  margin: 60px 0px;
`;

export const StyCard = styled.div`
  min-height: 200px;
  max-width: 400px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 30px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
