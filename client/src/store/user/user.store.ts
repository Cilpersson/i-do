import { Module } from "vuex";
import { IRootState } from "../store";
import { actions } from "./user.actions";
import { mutations } from "./user.mutations";
import { IUserState } from "./user.types";
import { state } from "./user.constants";

export const user: Module<IUserState, IRootState> = {
  actions,
  mutations,
  namespaced: true,
  state,
};
