import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IPropsAllUsers } from './modules/user/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  cart: IPropsAllUsers;
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
