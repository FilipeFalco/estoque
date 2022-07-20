import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const {user} = useAuth();

  if (!user) {
    return <Navigate to='/login' />;
  }

  return children;
};
