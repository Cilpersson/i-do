import { ActionTree } from "vuex";
import { IRootState } from "../store";
import { EUserAction, EUserMutation } from "./user.constants";
import { ICreateUserPayload, ILoginPayload, IUserState } from "./user.types";
import { LoginService } from "@/api/login-service";

export const actions: ActionTree<IUserState, IRootState> = {
  async [EUserAction.CreateUser]({ commit }, payload: ICreateUserPayload) {
    try {
      const data = await LoginService.signup(payload);
      commit(EUserMutation.SetUser, data.name);
    } catch (error) {
      console.log("error");
    }
  },
  async [EUserAction.Login]({ commit }, payload: ILoginPayload) {
    try {
      await LoginService.login(payload);
      commit(EUserMutation.SetLoggedIn, true);
    } catch (error) {
      console.log("error");
    }
  },
};
