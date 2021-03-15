import { Reducer } from 'redux';
import produce from 'immer';
import { uuid } from 'uuidv4';
import { IPropsAllUsers, ActionTypes } from './types';

const INITIAL_STATE: IPropsAllUsers = {
  users: [
    {
      user: {
        id: uuid(),
        name: 'Samuel de Sousa Dias',
        email: 'samuel@teste.com',
        password: '123456',
        dateOfBirth: '16/04/1997',
        userType: 'Administrador',
      },
    },
    {
      user: {
        id: uuid(),
        name: 'Kewton Venâncio do Carmo',
        email: 'kewton@teste.com',
        password: '654321',
        dateOfBirth: '15/03/1996',
        userType: 'Administrador',
      },
    },
    {
      user: {
        id: uuid(),
        name: 'Igor França do Nascimento',
        email: 'igor@teste.com',
        password: '159753',
        dateOfBirth: '14/02/1995',
        userType: 'Administrador',
      },
    },
  ],
};

const User: Reducer<IPropsAllUsers> = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addProductToCartRegister: {
        const { user } = action.payload;

        draft.users.push({
          user,
        });
        break;
      }
      case ActionTypes.addProductToCartDelete: {
        const { userId } = action.payload;
        const userIndex = draft.users.findIndex(
          item => item.user.id === userId,
        );
        draft.users.splice(userIndex, 1);

        break;
      }
      case ActionTypes.addProductToCartEdit: {
        const { user } = action.payload;
        const newUsers = draft.users.map(userTemp =>
          userTemp.user.id === user.id ? { user } : userTemp,
        );
        // eslint-disable-next-line no-param-reassign
        draft.users = [...newUsers];

        break;
      }
      default: {
        return draft;
      }
    }
    return draft;
  });

export default User;
