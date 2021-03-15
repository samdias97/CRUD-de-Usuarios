// eslint-disable-next-line no-shadow
export enum ActionTypes {
  addProductToCartRegister = 'REGISTER_USER_ADD',
  addProductToCartEdit = 'REGISTER_USER_EDIT',
  addProductToCartDelete = 'REGISTER_USER_DELETE',
}

export interface IUserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  dateOfBirth: string;
  userType: string;
}

export interface IUser {
  user: IUserProps;
}

export interface IPropsAllUsers {
  users: IUser[];
}
