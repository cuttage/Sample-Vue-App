import axios from "axios"
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);

const state = () => ({
  statistics: []
})

const mutations = {
  setStatistics (state, payload) {
    state.statistics = payload;
  },
  incrementSwitchCounter (state) {
    state.statistics[0].switchCounter++;
  },
  boolSwitchCurrentStatus (state) {
    state.statistics[0].switchCurrentStatus = !state.statistics[0].switchCurrentStatus;
  },
  setSwitchLastStatus (state, payload) {
    state.statistics[0].switchLastStatus = payload;
  }
}

const actions = {
  async populateStatistics({ commit }) {
    let res = await axios.get("http://localhost:8000/statistics");
    res.data;
    commit('setStatistics', res.data);
  },
  changeSwitchCounter({ commit }) {
    commit('incrementSwitchCounter');
  },
  changeSwitchCurrentStatus({ commit }) {
    commit('boolSwitchCurrentStatus');
  },
  changeSwitchLastStatus({ commit }, status) {
    commit('setSwitchLastStatus', status);
  }
}

const getters = {
  getStatistics: (state) => state.statistics
}

const vuexLocal = new VuexPersistence({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins: [vuexLocal.plugin]
})
