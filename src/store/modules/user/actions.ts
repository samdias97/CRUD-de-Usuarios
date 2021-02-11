import { ActionTypes, IUserProps } from './types';

interface ReturnProps {
  type: string;
  payload: {
    user: IUserProps;
  };
}

interface ReturnPropsDelete {
  type: string;
  payload: {
    userId: string;
  };
}

export function addProductToCartRegister(user: IUserProps): ReturnProps {
  return {
    type: ActionTypes.addProductToCartRegister,
    payload: {
      user,
    },
  };
}

export function addProductToCartEdit(user: IUserProps): ReturnProps {
  return {
    type: ActionTypes.addProductToCartEdit,
    payload: {
      user,
    },
  };
}

export function addProductToCartDelete(userId: string): ReturnPropsDelete {
  return {
    type: ActionTypes.addProductToCartDelete,
    payload: {
      userId,
    },
  };
}
