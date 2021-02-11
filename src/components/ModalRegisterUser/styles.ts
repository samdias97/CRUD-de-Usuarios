import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  cor: boolean;
}

const appearFromRight = keyframes`
  from {
    opacity: 0.5;
    transform: scale(0.7);
  }
  to{
    opacity: 1;
    transform: scale(1);
  }
`;

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  animation: ${appearFromRight} 300ms;
  position: relative;
  width: 500px;
  height: 270px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 5px;
`;

export const ContainerHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: Arial, Helvetica, sans-serif;

div {
  display: flex;
  width: 90%;

  input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 2px solid #006600;
    outline: none;
    background: #f2f2f2;
    & + input {
      margin-left: 5px;
    }
  }
  select {
    width: 103%;
    height: 37px;
    border-radius: 5px;
    border: 2px solid #006600;
    outline: none;
    background: #f2f2f2;
    margin-left: 5px;
  }
  span {
    color: red;
  }

  & + div {
    margin-top: 15px;
  }
}
`;

export const ContainerHeaderDados = styled.div`
  display: flex;
  justify-content: center;
  p {
    font-weight: bold;
    margin-top: 15px;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
  }
`;

export const ContainerButtonAtualizar = styled.div`
  position: absolute;
  top: 1%;
  right: 0%;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #990000;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ContainerButton = styled.div<ContainerProps>`
  position: absolute;
  bottom: -45px;
  left: 5%;
  display: flex;
  width: 90%;
  margin: 10px auto;
  justify-content: center;
  align-items: center;

  button {
    width: 40%;
    height: 40px;
    padding: 0 10px;
    margin-top: 30px;
    margin-bottom: 15px;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #00994d;
    transition: background 0.2s;
    cursor: pointer;
    &:hover {
      background: ${shade(0.2, '#00994d')};
    }
  }
`;
