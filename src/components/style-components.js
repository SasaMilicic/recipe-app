import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyForm = styled.form`
  margin: 0px 300px;

  div {
    width: 100%;
    position: relative;
  }

  input {
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 20px;
    color: white;
    padding: 10px 40px;
    border: none;
    border-radius: 15px;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

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

export const StyGradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export const StyList = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0px;
`;

export const StyNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 30px;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 90px;
  height: 90px;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
  }

  svg {
    color: white;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;
