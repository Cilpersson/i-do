import { namespace } from "vuex-class";
import { IUserState } from "./user.types";

export const User = namespace("user");

export enum EUserState {
  Name = "name",
  Avatar = "avatar",
  LoggedIn = "loggedIn",
}

export const state: IUserState = {
  [EUserState.Name]: "",
  [EUserState.Avatar]: "",
  [EUserState.LoggedIn]: false,
};

export enum EUserAction {
  CreateUser = "createUser",
  Login = "login",
}

export enum EUserMutation {
  SetUser = "setUser",
  SetLoggedIn = "setLoggedIn",
}
