import React from 'react';
import { useRefresh } from '~services/auth';

interface IProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IProps> = ({ children }) => {
  const { isLoading } = useRefresh();

  return isLoading ? <div>...loading</div> : children;
};

export default AuthProvider;
