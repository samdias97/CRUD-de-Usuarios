import React, { useState } from 'react';
import ModalReisterUser from '../ModalRegisterUser';
import { Title, ContainerButton } from './styles';

const Header: React.FC = () => {
  const [register, setRegister] = useState(false);

  return (
    <>
      <Title>
        <h1>Usuários</h1>
      </Title>

      <ContainerButton>
        <button type="button" onClick={() => setRegister(true)}>
          Cadastrar
        </button>
      </ContainerButton>

      {register && <ModalReisterUser onClose={() => setRegister(false)} />}
    </>
  );
};

export default Header;
