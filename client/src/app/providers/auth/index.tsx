import { useRefresh } from '~services/auth';
import { Preloader } from '~shared/ui';

interface IProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IProps> = ({ children }) => {
  const { isLoading } = useRefresh();

  return isLoading ? <Preloader isFullScreen /> : <>{children}</>;
};

export default AuthProvider;
