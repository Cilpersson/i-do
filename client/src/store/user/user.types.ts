export interface IUserState {
  name: string;
  avatar: string;
  loggedIn: boolean;
}

export interface ICreateUserPayload {
  name: string;
  attending: boolean;
  email: string;
  password: string;
}

export interface ILoginPayload {
  email: string;
  password: string;
}
