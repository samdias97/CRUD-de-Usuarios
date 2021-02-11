import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #00cc66;
  border-radius: 7px 7px 0 0;

  h1 {
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 38px;
  background: #00994d;
  border-radius: 0 0 7px 7px;
  margin-bottom: 50px;

  button {
    border: none;
    outline: none;
    width: 100px;
    height: 25px;
    background: #00b359;
    color: #ffffff;
    font-size: 15px;
    cursor: pointer;
    border-radius: 7px;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#00994d')}
    }
  }
`;
