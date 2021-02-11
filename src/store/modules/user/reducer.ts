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
        email: 'samuel.sdias@hotmail.com',
        password: '123456',
        dateOfBirth: '16/04/1997',
        userType: 'Administrador',
      },
    },
    {
      user: {
        id: uuid(),
        name: 'Samuel de Sousa Dias',
        email: 'samuel.sdias@hotmail.com',
        password: '123456',
        dateOfBirth: '16/04/1997',
        userType: 'Administrador',
      },
    },
    {
      user: {
        id: uuid(),
        name: 'Samuel de Sousa Dias',
        email: 'samuel.sdias@hotmail.com',
        password: '123456',
        dateOfBirth: '16/04/1997',
        userType: 'Administrador',
      },
    },
  ],
};

// eslint-disable-next-line consistent-return
const User: Reducer<IPropsAllUsers> = (state = INITIAL_STATE, action) => produce(state, (draft) => {
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
      const userIndex = draft.users.findIndex((item) => item.user.id === userId);
      draft.users.splice(userIndex, 1);

      break;
    }
    case ActionTypes.addProductToCartEdit: {
      const { user } = action.payload;
      // eslint-disable-next-line max-len
      const newUsers = draft.users.map((userTemp) => (userTemp.user.id === user.id ? { user } : userTemp));
      // eslint-disable-next-line no-param-reassign
      draft.users = [...newUsers];

      break;
    }
    default: {
      return draft;
    }
  }
});

export default User;
