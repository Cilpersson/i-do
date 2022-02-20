import Vue from "vue";
import Vuex from "vuex";
import { user } from "./user/user.store";

Vue.use(Vuex);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRootState {}
const defaultState: IRootState = {};

export default new Vuex.Store({
  state: defaultState,
  modules: { user },
});
