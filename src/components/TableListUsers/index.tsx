import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { IState } from '../../store';
import { IUser, IUserProps } from '../../store/modules/user/types';
import { ContainerTable } from './styles';
import { addProductToCartDelete } from '../../store/modules/user/actions';
import ModalEditUser from '../ModalEditUser';

const TableListUsers: React.FC = () => {
  const dispatch = useDispatch();

  const listUsers = useSelector<IState, IUser[]>(
    stateTemp => stateTemp.cart.users,
  );
  const [editUser, setEditUser] = useState(false);
  const [dataUserEdit, setDataUserEdit] = useState<IUserProps>();

  const handleDeleteUser = useCallback(
    (idUser: string) => {
      dispatch(addProductToCartDelete(idUser));
    },
    [dispatch],
  );

  return (
    <>
      {editUser && dataUserEdit && (
        <ModalEditUser
          onClose={() => setEditUser(false)}
          dadosUser={dataUserEdit}
        />
      )}
      <ContainerTable>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome do usuário</th>
              <th>E-mail</th>
              <th>Data de nascimento</th>
              <th>Tipo de usuário</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>

          <tbody>
            {listUsers.map(item => (
              <tr key={item.user.id}>
                <td>{item.user.id}</td>
                <td>{item.user.name}</td>
                <td>{item.user.email}</td>
                <td>{item.user.dateOfBirth}</td>
                <td>{item.user.userType}</td>
                <td>
                  <button
                    type="button"
                    id="btnEdit"
                    onClick={() => {
                      setDataUserEdit(item.user);
                      setEditUser(true);
                    }}
                  >
                    <AiOutlineEdit size={20} />
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    id="btnDelete"
                    onClick={() => handleDeleteUser(item.user.id)}
                  >
                    <AiOutlineDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContainerTable>
    </>
  );
};
export default TableListUsers;
