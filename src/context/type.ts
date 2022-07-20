import { ApiError, Session, User, UserCredentials } from '@supabase/supabase-js';

export interface IUserAuth {
  email?: string;
  password?: string;
}
export interface IUser {
  email: string,
  id: string,
  phone: string,
  role: string
}
export interface IAuthProvider {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
}
export interface IContext {
  signUp: any;
  signIn: any;
  signOut: any;
  user: IUser | null | undefined;
}
