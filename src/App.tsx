import React from 'react';
import { Provider } from 'react-redux';
import TableListUsers from './components/TableListUsers';
import Header from './components/Header';
import store from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Header />
      <TableListUsers />
    </Provider>
  );
}

export default App;
