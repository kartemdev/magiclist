import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app-store';

interface IProps {
  children: React.ReactNode;
}

const StoreProvider: React.FC<IProps> = ({children}) => {
  return <Provider store={store} >{children}</Provider>
};

export default StoreProvider;
