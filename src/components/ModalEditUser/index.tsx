import React, { useCallback, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addProductToCartEdit } from '../../store/modules/user/actions';
import { IUserProps } from '../../store/modules/user/types';

import {
  ContainerModal,
  Container,
  ContainerHeader,
  ContainerHeaderDados,
  ContainerButtonAtualizar,
  ContainerButton,
} from './styles';

interface ModalDetalhesUsers {
  dadosUser: IUserProps;
  // eslint-disable-next-line react/require-default-props
  onClose?(): void;
}

const Modal: React.FC<ModalDetalhesUsers> = ({
  onClose = () => {
    ('');
  },
  dadosUser,
}: ModalDetalhesUsers) => {
  const dispatch = useDispatch();
  const [nameUser, setNameUser] = useState(dadosUser.name);
  const [emailUser, setEmailUser] = useState(dadosUser.email);
  const [passwordUser, setPasswordUserUser] = useState(dadosUser.password);
  const [passwordConfirmUser, setPasswordConfirmUser] = useState('');
  const [dayOfBirthUser, setDayOfBirthUser] = useState(dadosUser.dateOfBirth);
  const [typeUser, setTypeUser] = useState(dadosUser.userType);
  const [senhasDivergentes, setSenhasDivergentes] = useState(false);
  const [camposNaoPreenchidos, setCamposNaoPreenchidos] = useState(false);

  const handleOutSideClick = useCallback(
    e => {
      if (e.target.id === 'modal') {
        onClose();
      }
    },
    [onClose],
  );

  const handleEditUser = useCallback(() => {
    if (
      nameUser === '' ||
      emailUser === '' ||
      passwordUser === '' ||
      passwordConfirmUser === '' ||
      dayOfBirthUser === ''
    ) {
      setCamposNaoPreenchidos(true);
      setSenhasDivergentes(false);
    } else if (passwordUser !== passwordConfirmUser) {
      setSenhasDivergentes(true);
      setCamposNaoPreenchidos(false);
    } else {
      dispatch(
        addProductToCartEdit({
          id: dadosUser.id,
          name: nameUser,
          email: emailUser,
          password: passwordUser,
          dateOfBirth: dayOfBirthUser,
          userType: typeUser,
        }),
      );
      onClose();
    }
  }, [
    dadosUser.id,
    dayOfBirthUser,
    dispatch,
    emailUser,
    nameUser,
    onClose,
    passwordConfirmUser,
    passwordUser,
    typeUser,
  ]);

  return (
    <>
      <div>
        <ContainerModal id="modal" onClick={e => handleOutSideClick(e)}>
          <Container>
            <ContainerHeaderDados>
              <p>Editar Usuário</p>
            </ContainerHeaderDados>
            <ContainerHeader>
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  value={nameUser}
                  onChange={e => setNameUser(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="E-mail"
                  value={emailUser}
                  onChange={e => setEmailUser(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Senha"
                  value={passwordUser}
                  onChange={e => setPasswordUserUser(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirmar senha"
                  value={passwordConfirmUser}
                  onChange={e => setPasswordConfirmUser(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Data de nascimento"
                  value={dayOfBirthUser}
                  onChange={e => setDayOfBirthUser(e.target.value)}
                />
                <select onChange={e => setTypeUser(e.target.value)}>
                  <option>Administrador</option>
                  <option>Colaborador</option>
                  <option>Gerente</option>
                </select>
              </div>
              {camposNaoPreenchidos && (
                <div>
                  <span>Favor preencher todos os campos!</span>
                </div>
              )}
              {senhasDivergentes && (
                <div>
                  <span>A confirmação da senha deve ser igual à senha!</span>
                </div>
              )}
            </ContainerHeader>
            <ContainerButton cor={false}>
              <button type="button" onClick={handleEditUser}>
                Salvar
              </button>
            </ContainerButton>
            <ContainerButtonAtualizar>
              <button
                type="button"
                onClick={() => {
                  onClose();
                }}
              >
                <AiFillCloseCircle size={24} />
              </button>
            </ContainerButtonAtualizar>
          </Container>
        </ContainerModal>
      </div>
    </>
  );
};

export default Modal;
