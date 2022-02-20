import { MutationTree } from "vuex";
import { IUserState } from "./user.types";
import { EUserMutation } from "./user.constants";

export const mutations: MutationTree<IUserState> = {
  [EUserMutation.SetUser](state, name: string) {
    state.name = name;
  },
  [EUserMutation.SetLoggedIn](state, loggedIn: boolean) {
    state.loggedIn = loggedIn;
  },
};
