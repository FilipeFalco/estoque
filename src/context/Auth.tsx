import {  UserCredentials } from '@supabase/supabase-js';
import { createContext, useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { IAuthProvider, IContext, IUserAuth, IUser } from './type';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<null | IUser >();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.session();

    setUser(session?.user as IUser ?? null);
    setLoading(false);

    // ouve as alterações de autenticação (logado, deslogado, ...)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user as IUser ?? null);
        setLoading(false);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const value = {
    signUp: (data: IUserAuth) => supabase.auth.signUp(data),
    signIn: (data: UserCredentials) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
