import Vue from 'vue';
import Vuex from 'vuex';

import modalModule from './modules/modalModule';
import tableModule from './modules/tableModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    modal: modalModule,
    table: tableModule,
  },
});
