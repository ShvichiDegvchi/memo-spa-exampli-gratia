import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * 変数を定義する場所
   */
  state: {
    test: null, // 初期値（Initial Value）は null とする
  },
  /**
   * 指定した変数の値を返却するための処理群
   */
  getters: {
    test: function(state) {
      return state.test;
    },
  },
  /**
   * 指定した変数の値を変更する直前に行う処理群。"非同期的に"値を変更する
   */
  actions: {
    test({commit}, newVal) {
      // mutationsを叩く。
      // 「commit」という関数は、mutationsを叩くためのVuexのお作法です。
      commit('test', newVal);
    },
  },
  /**
   * 指定した変数の値を変更する処理群。"同期的に"値を変更する
   */
  mutations: {
    test(state, payload) {
      state.test = payload;
    },
  },
});
