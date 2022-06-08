import { ApiError, Session, User, UserCredentials } from '@supabase/supabase-js';

export interface IUser {
  email?: string;
  password?: string;
}
export interface IAuthProvider {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
}
export interface IContext extends IUser {
  signUp: any;
  signIn: any;
  signOut: any;
  user: User | null | undefined;
}
