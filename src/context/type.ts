export interface IUser {
  email?: string;
  password?: string;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export type LoginInterface = {
  email: string;
  password: string;
};
