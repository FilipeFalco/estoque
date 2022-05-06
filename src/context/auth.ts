import { IContext, LoginInterface } from './type';
import { supabase } from './../services/supabase';
import { ChildrenLayout } from './../components/Layout/type';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const authContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: ChildrenLayout) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}> {children} </authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const history = useNavigate();

  const login = async ({ email, password }: LoginInterface) => {
    const error = await supabase.auth.signIn({
      email,
      password,
    });

    if (error.error) {
      message.error('Erro ao realizar login!');
      console.log(error);
    } else {
      message.success('Login realizado com sucesso!');
      history('/');
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    setUser(null);
  };

  useEffect(() => {
    const user = supabase.auth.user();
    setUser(user);

    const auth = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setUser(session.user);
      }

      if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });

    return () => auth.unsubscribe();
  }, []);

  return { user, login, logout };
}
